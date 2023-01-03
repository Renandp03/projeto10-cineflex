import styled from "styled-components"

export default function Footer(props){
    const { title, poster, session} = props

    return(
        <StyledFooter>
            <Poster><img src={poster}/></Poster>
            <div>
                <h2>{title}</h2>
                <p>{session}</p>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    background-color: #042741;
    position: fixed;
    bottom: 0px;
    left: 0px;
    transition: all linear 0.3s;
    &:hover{
        height: 123px;
    }
    h2{
        font-size: 26px;
        color: white;
    }
    p{
        margin-top: 10px;
        font-size: 20px;
        color: white;
    }

`

const Poster = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: 10px;
    img{
        width: 48px;
        height: 72px;
    }
`