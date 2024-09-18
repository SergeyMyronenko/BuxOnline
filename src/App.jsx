import { Routes, Route } from "react-router";

import Vacancy from "./Pages/Vacancy/Vacancy";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        <Route path='/BuxOnline/' element={<Index />} />
        <Route path='/BuxOnline/vacancy' element={<Vacancy />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
