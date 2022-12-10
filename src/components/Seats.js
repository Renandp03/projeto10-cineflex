import styled from "styled-components"
import axios from "axios"




export default function Seats(){
    return(
        <>
        <TitlePage><p>Selecione o(s) assento(s)</p></TitlePage>
        
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