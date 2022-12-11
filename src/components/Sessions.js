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

    console.log(listSessions)
    

    if(listSessions.days!= undefined){
    return(
        <>
        <TitlePage><h1>Selecione o horário</h1></TitlePage>
        <Screen>
           {listSessions.days.map((s)=><li><Session info = {s}/></li>)}
        </Screen>
        <Footer title={listSessions.title} poster={listSessions.posterURL}/>
        </>
        )
    }
    else{
        return(
            <img src="assets/loading.gif"/>
        )
    }

}

function Session(props){

   const {info} = props
    const buttons = info.showtimes

    return(
        <>
        <DaySession>
            <p>{info.weekday} - {info.date}</p>
            {buttons.map((t)=> <Link to={`seats/${t.id}`}><button>{t.name}</button></Link>)}
            
        </DaySession>
        
        </>
    )
}



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

const DaySession = styled.div`
    width: 375px;
    margin: 24px;
    p{
        font-size: 20px;
        color: #293845;
    }
    button{
        font-size: 18px;
        width: 82px;
        height: 43px;
        margin: 23px 8px 22px 0px;
        color: white;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
    }

`

const Screen = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
