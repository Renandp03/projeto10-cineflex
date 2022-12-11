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
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    p{
        font-size: 34px;
        color: #E8833A;
    }
`