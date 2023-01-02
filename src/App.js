
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './components/GlobalStyled';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Seats from "./components/Seats"
import Sessions from "./components/Sessions";
import Success from "./components/Success";



function App() {
  const [ name, setName ] = useState("")
  const [ CPF, setCPF] = useState("")
  const [seatsOn, setSeatsOn] = useState([])
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [weekday, setWeekday] = useState("")
  const [movieName, setMovieName] = useState("")

  return (
   
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Routes>

        <Route path='/'element={<Movies/>}/>

        <Route path='/sessions/:movieId' element={<Sessions/>}/>

        <Route path='/seats/:sessionId'
        element={<Seats 
        name={name} 
        setName={setName} 
        CPF={CPF} 
        setCPF={setCPF} 
        seatsOn={seatsOn} 
        setSeatsOn={setSeatsOn}
        setTime={setTime}
        setDate={setDate}
        setWeekday={setWeekday}
        setMovieName={setMovieName}/>}/>

        <Route path='/success' 
        element={<Success 
        name={name} 
        CPF={CPF} 
        seatsOn={seatsOn} 
        date={date} 
        time={time} 
        title={movieName}/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
