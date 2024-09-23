import { Routes, Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import RegisterCompany from "./Pages/Register/RegisterCompany";
import Onboard from "./Pages/Register/Onboard";
import CompanyCabinet from "./Pages/EmployerPage/CompanyCabinet";
import CompanyVacancies from "./Pages/EmployerPage/CompanyVacancies";
import ChooseMethodToCreate from "./Pages/EmployerPage/ChooseMethodToCreate";
import CreateVacancy from "./Pages/EmployerPage/CreateVacancy";
import './App.scss'

import '@mantine/core/styles.css';



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

        <Route path="/BuxOnline/company/cabinet/:id" element={<CompanyCabinet/>}></Route>      
        <Route path="/BuxOnline/company/jobs/" element={<CompanyVacancies/>}></Route>    
        <Route path="/BuxOnline/company/jobs/choose" element={<ChooseMethodToCreate/>}></Route>   
        <Route path="/BuxOnline/company/jobs/create" element={<CreateVacancy/>}></Route>      



        
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
