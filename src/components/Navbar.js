import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <Link to="/"><Title><p>CINEFLEX</p></Title></Link>
    )
}

const Title = styled.div`
    width: 100%;
    height: 67px;
    font-weight: 700;
    background-color: #042741;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    p{
        font-size: 34px;
        font-weight: 700;
        color: #EA6A22;
    }
`