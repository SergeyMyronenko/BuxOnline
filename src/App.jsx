import { Routes,Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import { Link } from "react-router-dom";
import './App.scss'

function App() {

  return (
    <>
    <Link to="/vite-react-app/">Index</Link>
    <Link to="/vite-react-app/vacancy">Vacancy</Link>
    <Routes>
            <Route path='/vite-react-app/' element={<Index/>}/>
            <Route path='/vite-react-app/vacancy' element={<Vacancy/>}/>
     </Routes>
      
    
      
      
    </>
  )
}

export default App
