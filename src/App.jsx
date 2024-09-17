import { Routes, Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import { Link } from "react-router-dom";
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path='/BuxOnline/' element={<Index />} />
        <Route path='/BuxOnline/vacancy' element={<Vacancy />} />
      </Routes>
    </>
  )
}

export default App
