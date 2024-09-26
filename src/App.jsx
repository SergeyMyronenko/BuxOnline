import { Routes, Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import CompanyCabinet from "./Pages/EmployerPage/CompanyCabinet";
import CompanyVacancies from "./Pages/EmployerPage/CompanyVacancies";
import ChooseMethodToCreate from "./Pages/EmployerPage/ChooseMethodToCreate";
import CreateVacancy from "./Pages/EmployerPage/CreateVacancy";
import ConfirmCreatedVacancy from "./Pages/EmployerPage/ConfirmCreatedVacancy.tsx";

import './App.scss'

import '@mantine/core/styles.css';
import VacancyCreated from "./Pages/EmployerPage/VacancyCreated.tsx";
import ForgotPassword from "./Pages/LogIn/ForgotPassword.jsx";



/**
 * The main application component that sets up the routing for the application.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @todo Implement nested routing.
 */
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
        <Route path='/BuxOnline/login/forgot-password' element={<ForgotPassword />} />
        <Route path='/BuxOnline/login/forgot-password/:email' element={<ForgotPassword />} />



        <Route path='/BuxOnline/register' element={<Register />}/>
       
        <Route path="/BuxOnline/company/cabinet/:id" element={<CompanyCabinet/>}></Route>      
        <Route path="/BuxOnline/company/jobs/" element={<CompanyVacancies/>}></Route>    
        <Route path="/BuxOnline/company/jobs/choose" element={<ChooseMethodToCreate/>}></Route>   
        <Route path="/BuxOnline/company/jobs/create" element={<CreateVacancy/>}></Route>   
        <Route path="/BuxOnline/company/jobs/create/:id" element={<ConfirmCreatedVacancy/>}></Route>    
        <Route path="/BuxOnline/company/jobs/create/:id/finished" element={<VacancyCreated/>}></Route>    

        <Route path='/BuxOnline/seeker' element={<h2>Seeker page</h2>}/>





        
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
