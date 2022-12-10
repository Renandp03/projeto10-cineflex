import styled from "styled-components"

export default function Navbar(){
    return(
        <Title><p>CINEFLEX</p></Title>
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