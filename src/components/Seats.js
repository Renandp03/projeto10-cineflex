import styled from "styled-components"
import axios from "axios"
import { useParams, Link, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Footer from "./Footer"




export default function Seats(){

    const { sessionId } = useParams()
    const [listSeats, setListSeats] = useState([])
    const [selecteds, setSelecteds] = useState([])  
    const [ nome, setNome ] = useState("")
    const [ CPF, setCPF] = useState("")

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response => setListSeats(response.data))

    },[])
    console.log(listSeats)

    function finalize(){
        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
            {ids:selecteds, name:nome,cpf:CPF}
        )
        request.then(()=> Navigate("/"))
    }


    if(listSeats.seats!=undefined){
         return(
        <>
        <TitlePage><h1>Selecione o(s) assento(s)</h1></TitlePage>

        <Screen>
            <Room>
                {listSeats.seats.map((s)=>
                    <Seat 
                    id = {s.id}
                    selecteds={selecteds}
                    setSelecteds={setSelecteds}
                    isAvailable={s.isAvailable} 
                    key={s.id} 
                    number={s.name}/>)}
            </Room>
            <Subtitle>
                <Example><SeatAvailable selected={true}/><p>Selecionado</p></Example>
                <Example><SeatAvailable selected={false}/><p>Disponível</p></Example>
                <Example><SeatUnavailable/><p>Indisponível</p></Example>
            </Subtitle>
            <Dados>
                <p>Nome do Comprador:</p>
                <input onChange={e=> setNome(e.target.value)} type="text" required placeholder="Digite seu nome..."></input>
            </Dados>
            <Dados>
                <p>CPF do Comprador:</p>
                <input onChange={e=> setCPF(e.target.value)} type="number" required placeholder="Digite seu CPF..."></input>
            </Dados>
            <button onClick={finalize} type="submit">Reservar assento(s)</button>
        </Screen>
        <Footer title={listSeats.movie.title} poster={listSeats.movie.posterURL}/>
        </>
    )
    }
   
}


function Seat(props){
  
    function select(){
        if(selected){
            setSelected(false)
            setSelecteds(selecteds.filter(n => (n!=id)))
            console.log(selecteds.filter(n => (n!=id)))
        }
        else{
            setSelected(true)
            setSelecteds([...selecteds,id])
            console.log([...selecteds,id])
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
border: 1px solid ${props=> props.selected ? "#0E7D71" : "#808F9D"};
border-radius: 100%;
background-color: ${props=> props.selected ? "#1AAE9E" : "#C3CFD9"};
margin: 7px;
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
        color: #4E5A65;
    }
`
const SeatUnavailable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid #F7C52B;
    border-radius: 100%;
    background-color: #FBE192;
    margin: 7px;
    p{
        font-size: 11px;
    }
`
const Dados = styled.div`
margin: 7px;
    p{
        font-size: 18px;
        color: #293845;
        align-self: start;
        margin: 3px 0px;
    }
    input{
        width: 372px;
        height: 51px;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
    }
    input::placeholder{
        font-size: 18px;
        color: #AFAFAF;
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
        background-color: #E8833A;
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
        color: #293845;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 110px;
        font-size: 24px;
        text-align: center;
    }
`