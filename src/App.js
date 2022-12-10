
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/GlobalStyled';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Seats from "./components/Seats"
import Sessions from "./components/Sessions";



function App() {
  return (
   
    <BrowserRouter>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Movies/>}/>
        <Route path='/seats/:movieId' element={<Seats/>}/>
        <Route path='/sessions/:movieId' element={<Sessions/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
