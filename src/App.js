
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/GlobalStyled';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Seats from "./components/Seats"
import Sessions from "./components/Sessions";
import Success from "./components/Success";



function App() {
  return (
   
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Movies/>}/>
        <Route path='/sessions/:movieId' element={<Sessions/>}/>
        <Route path='/seats/:sessionId' element={<Seats/>}/>
        <Route path='/success/:name+:cpf+:date+:time+:title+:seats' element={<Success/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
