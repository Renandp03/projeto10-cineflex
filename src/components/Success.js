import styled from "styled-components"
import { Link, useParams } from "react-router-dom"

export default function Success(){

    const { name, cpf, seats, date, time, title} = useParams()
    console.log(seats)
    let numbers = seats.split(",")
    console.log(numbers)

    return(
        <>
        <TitlePage><h1>Pedido feito com sucesso!</h1></TitlePage>
        <Screen>
            <Information>
                <h2>Filme e sessão</h2>
                <p>{title}</p>
                <p>{date} - {time}</p>
            </Information>
            <Information>
                <h2>Ingressos</h2>
                {numbers.map((s)=> <p key={s}>{`Assento ${s}`}</p>)}
            </Information>
            <Information>
                <h2>Comprador</h2>
                <p>{name}</p>
                <p>{cpf}</p>
            </Information>
            <Link to="/"><button>Voltar pra Home</button></Link>
        </Screen>
        </>
    )
}


const TitlePage = styled.div`
    h1{
        color: #247A6B;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 110px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    }
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 325px;
    color: #293845;
    margin-bottom: 50px;
    h2{
        font-weight: 700;
        font-size: 24px;
    }
    p{
        font-size: 22px;
        line-height: 25px;
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
        margin: 25px;
    }
`