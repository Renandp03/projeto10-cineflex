import styled from "styled-components"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"





export default function Seats(){

    const { sessionId } = useParams()
    const [listSeats, setListSeats] = useState([])
    const [selecteds, setSelecteds] = useState([])

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`)
        promise.then(response => setListSeats(response.data))

    },[])
    console.log(listSeats)




    if(listSeats.seats!=undefined){
         return(
        <>
        <TitlePage><h1>Selecione o(s) assento(s)</h1></TitlePage>

        <Screen>
            <Room>
                {listSeats.seats.map((s)=>
                    <Seat 
                    isAvailable={s.isAvailable} 
                    key={s.id} 
                    number={s.name}/>)}
                <SeatSelected/>
                <SeatUnavailable/>
            </Room>
        </Screen>
        </>
    )
    }
   
}


function Seat(props){
    
    const { number, isAvailable } = props

    if(isAvailable){
         return(
         <SeatAvailable><p>{number}</p></SeatAvailable>
    )
    }
    else{
        return(
            <SeatUnavailable><p>{number}</p></SeatUnavailable>
        )
    }   

    
}



const SeatAvailable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid #808F9D;
    border-radius: 100%;
    background-color: #C3CFD9;
    margin: 7px;
    p{
        font-size: 11px;
    }
`

const SeatSelected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid #0E7D71;
    border-radius: 100%;
    background-color: #1AAE9E;
    margin: 7px;
    p{
        font-size: 11px;
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



const Screen = styled.div`
    display: flex;
    justify-content: center;
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