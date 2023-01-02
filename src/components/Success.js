import styled from "styled-components"
import { Link, useParams } from "react-router-dom"

export default function Success(props){

    const { name, CPF, seatsOn, date, time, title} = props
    let numbers = String(seatsOn).split(",")
    let newDate = date.split("-")

    return(
        <>
        <TitlePage>Pedido feito com sucesso!<img src="assets/ok.gif" alt="ok"/></TitlePage>
        <Screen>
            <Information data-test="movie-info">
                <h2>Filme e sessão</h2>
                <p>{title}</p>
                <p>{newDate.join("/")} - {time}</p>
            </Information>
            <Information data-test="seats-info">
                <h2>Ingressos</h2>
                {numbers.map((s)=> <p key={s}>{`Assento ${s}`}</p>)}
            </Information>
            <Information data-test="client-info">
                <h2>Comprador</h2>
                <p>Nome:{name==="" ? " Não definido" : name}</p>
                <p>CPF:{CPF==="" ? " Não definido" : CPF}</p>
            </Information>
            <Link to="/"><button data-test="go-home-btn">Voltar para Home</button></Link>
        </Screen>
        </>
    )
}


const TitlePage = styled.div`
    
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    
    img{
        height: 24px;
        margin-left: 15px;
    }
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 325px;
    color: #293845;
    margin-bottom: 50px;
    margin-left: 42px;
    h2{
        font-weight: 700;
        font-size: 24px;
        color: #042741;
    }
    p{
        font-size: 22px;
        line-height: 25px;
        color: white;
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
        margin: 25px;
    }
`