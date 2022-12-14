import styled from "styled-components"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "./Footer"




export default function Seats(props){
    const {name, setName, CPF, setCPF, seatsOn, setSeatsOn, setTime, setDate, setWeekday, setMovieName} = props

    const { sessionId } = useParams()
    const [listSeats, setListSeats] = useState([])
    const [selecteds, setSelecteds] = useState([])  
    
    const navigate = useNavigate()

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response => setListSeats(response.data))

    },[])
   
    
   
    if(listSeats.seats!=undefined){
        const title = listSeats.movie.title
        const poster = listSeats.movie.posterURL
        const weekday = listSeats.day.weekday
        const time = listSeats.name
        const date = listSeats.movie.releaseDate.substring(0,10)
        

        function finalize(event){
            event.preventDefault()
            
            if(selecteds.length===0){
                alert("escolha ao menos um assento")
            }
            else{
            

            setMovieName(title)
            setWeekday(weekday)
            setTime(time)
            setDate(date)

            let listIds=[]
            let listNumbers=[]
            for(let i=0;i<selecteds.length;i++){
                listIds.push(selecteds[i].id)
                listNumbers.push(selecteds[i].number)
            }
            
            setSeatsOn(listNumbers)
            
            const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
                {ids:listIds, name:name,cpf:CPF}
            )
            request.then(()=> navigate(`/success`))
        }
        }

         return(
        <>
        <TitlePage><h1>Selecione o(s) assento(s)</h1></TitlePage>

        <Screen>
            <Room>
                {listSeats.seats.map((s)=>
                    <Seat 
                    data-test="seat"
                    id = {s.id}
                    selecteds={selecteds}
                    setSelecteds={setSelecteds}
                    isAvailable={s.isAvailable} 
                    key={s.id} 
                    number={s.name}/>)}
            </Room>
            <Subtitle>
                <Example><SeatAvailable selected={true}/><p>Selecionado</p></Example>
                <Example><SeatAvailable selected={false}/><p>Dispon??vel</p></Example>
                <Example><SeatUnavailable/><p>Indispon??vel</p></Example>
            </Subtitle>
            <Form onSubmit={finalize}>
                <Dados>
                    <p>Nome do Comprador:</p>
                    <input data-test="client-name" onChange={e=> setName(e.target.value)} type="text" placeholder="Digite seu nome..."></input>
                </Dados>
                <Dados>
                    <p>CPF do Comprador:</p>
                    <input data-test="client-cpf" onChange={e=> setCPF(e.target.value)} maxLength="14" type="number" placeholder="Digite seu CPF..."></input>
                </Dados>
                <div><button data-test="book-seat-btn" onClick={finalize} type="submit">Reservar assento(s)</button></div>
            </Form>
        </Screen>
        <Footer
        data-test="footer"
        session={`${weekday} - ${time}`}
        title={title}
        poster={poster}/>
        </>
    )
    }
   
}


function Seat(props){
  
    function select(){
        if(selected){
            setSelected(false)
            setSelecteds(selecteds.filter(n => n.id!=id))
           
        }
        else{
            setSelected(true)
            setSelecteds([...selecteds,{id:id,number:number}])
            
        }
    }     

    const { number, isAvailable,selecteds,setSelecteds, id } = props
    const [selected,setSelected] = useState(false)

    if(isAvailable){
         return(
         <SeatAvailable 
         selected={selected}
          onClick={select} >
            <p>{number}</p>
        </SeatAvailable>
    )
    }
    else{
        return(
            <SeatUnavailable>
                <p>{number}</p>
            </SeatUnavailable>
        )
    }   

    
}
const SeatAvailable = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 26px;
height: 26px;
border: 1px solid ${props=> props.selected ? "#0E7D71" : "#F7C52B"};
border-radius: 100%;
background-color: ${props=> props.selected ? "#1AAE9E" : "#FBE192"};
margin: 7px;
cursor: pointer;
p{
    font-size: 11px;
}
`
const Subtitle = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    margin-bottom: 35px;
`
const Example = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 30px;
    p{
        font-size: 13px;
        color: white;
    }
`
const SeatUnavailable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 100%;
    background-color: #C3CFD9;
    margin: 7px;
    cursor: default;
    p{
        font-size: 11px;
    }
`
const Dados = styled.div`
    margin: 7px;
    p{
        font-size: 18px;
        color: white;
        align-self: start;
        margin: 3px 0px;
    }
    input{
        width: 372px;
        height: 51px;
        font-size: 18px;
        color: #042741;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        padding: 0px 11px;
        background-color: #F0F0F0;
        box-sizing: border-box;
    }
    input::placeholder{
        font-size: 18px;
        color: #042741;
    }
`
const Screen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        width: 225px;
        height: 42px;
        font-size: 18px;
        color: white;
        border: none;
        border-radius: 3px;
        background-color: #EA6A22;
        margin: 50px;
    }
`
const Room = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 450px;
`
const TitlePage = styled.div`
    h1{
        color: white;
        letter-spacing: 2px;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 110px;
        font-size: 24px;
        text-align: center;
    }
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

`