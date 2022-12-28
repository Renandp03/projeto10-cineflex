import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Movies(){

    const [listMovies,setListMovies] = useState([])
    

    useEffect(()=>{const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then( response => setListMovies(response.data))},[])
       if(listMovies.length!=0){
        return(
        <>
        <TitlePage><h1>Selecione o filme</h1></TitlePage>
        <Screen>
           <Catalogo>
                {listMovies.map((m) =><li><Link to={`/sessions/${m.id}`}><Movie data-test="movie" image={m.posterURL} title={m.title}/></Link></li>)}
           </Catalogo>
        </Screen>
        
        </>
         )
       } 
       else{return(
        <ForImg>
        <img src="assets/loading.gif"/>
        </ForImg>
       )}
    
   
}
const Screen = styled.div`
    display: flex;
    justify-content: center;
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

function Movie(props){
    
    return(
        <Poster>
            <div>
                <img src={props.image} alt={props.title}/>
            </div>
        </Poster>
    )
}

const Catalogo = styled.ul`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`



const Poster = styled.div`
    width: 194px;
    height: 247px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 145px;
        height: 209px;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        position: absolute;
        top:11px;
        left: 38px;
        transition: all linear .2s;
        /* margin: 11px 38px; */
        &:hover{
            top:5px;
            
        }
    }
    img{
        width: 129px;
        height: 193px;
    }
`

const ForImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        margin-top: 200px;
        width: 200px;
    }
` 