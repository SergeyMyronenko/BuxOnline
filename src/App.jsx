import { Routes, Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import BaseRegisterPage from "./Pages/Register/BaseRegisterPage";
import RegisterCompany from "./Pages/Register/RegisterCompany";
import Onboard from "./Pages/Register/Onboard";
import './App.scss'

function App() {

  return (
    <>
    {/* 
    Todo: nested routing
    no time for that rn
    */}
      <Routes>
        <Route path='/BuxOnline/' element={<Index />} />
        <Route path='/BuxOnline/vacancy' element={<Vacancy />} />
        <Route path='/BuxOnline/login' element={<LogIn />} />
        <Route path='/BuxOnline/register' element={<Register />}/>
        <Route path='/BuxOnline/register/company/' element={<RegisterCompany />} />
        <Route path="/BuxOnline/register/company/onboard" element={<Onboard />} />         
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
