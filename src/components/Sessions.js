import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "./Footer"


export default function Sessions(){
    const { movieId } = useParams()
    const [listSessions,setListSessions] = useState([])

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`)
        promise.then(response => setListSessions(response.data))
    },[])
    
    if(listSessions.days!= undefined){
    return(
        <>
        <TitlePage><h1>Selecione o horário</h1></TitlePage>
        <Screen>
           {listSessions.days.map((s)=><li><Session data-test="movie-day" info = {s}/></li>)}
        </Screen>
        <Footer data-test="footer" title={listSessions.title} poster={listSessions.posterURL}/>
        </>
        )
    }
  

}

function Session(props){
    const { movieId } = useParams()
   const {info} = props
    const buttons = info.showtimes

    return(
        <>
        <DaySession>
            <p>{info.weekday} - {info.date}</p>
            {buttons.map((t)=> <Link to={`/seats/${t.id}`}><button data-test="showtime">{t.name}</button></Link>)}
            
        </DaySession>
        
        </>
    )
}




const TitlePage = styled.div`
    h1{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 110px;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 24px;
        text-align: center;
    }
`

const DaySession = styled.div`
    width: 375px;
    margin: 24px;
    p{
        font-size: 20px;
        color: white;
    }
    button{
        font-size: 18px;
        width: 82px;
        height: 43px;
        margin: 23px 8px 22px 0px;
        color: white;
        background-color: #EA6A22;
        border: none;
        border-radius: 3px;
        cursor:pointer;
    }

`

const Screen = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
