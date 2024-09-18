import { Routes, Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path='/BuxOnline/' element={<Index />} />
        <Route path='/BuxOnline/vacancy' element={<Vacancy />} />
        <Route path='/BuxOnline/login' element={<LogIn />} />
        <Route path='/BuxOnline/register' element={<Register />} />


        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
