import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/App.scss'
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
   </BrowserRouter>

  );
}

export default App;
