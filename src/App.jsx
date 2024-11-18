import { Routes, Route } from "react-router";

import AllVacancies from "./Pages/AllVacancies/AllVacancies.jsx";
import VacancyDescription from "./Pages/VacancyDescription/VacancyDescription.jsx";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import EmployerPage from "./Pages/EmployerPage/EmployerPage.jsx";
import CompanyMessage from "./Pages/EmployerPage/CompanyMessages/CompanyMessage.jsx";
import CompanyVacancies from "./Pages/EmployerPage/CompanyVacancies/CompanyVacancies";
import ForgotPassword from "./Pages/LogIn/ForgotPassword.jsx";
import SeekerCabinet from "./Pages/SeekerPage/SeekerCabinet.tsx";
import SeekerCabinetEdit from "./Pages/SeekerPage/SeekerCabinetEdit.tsx";
import SeekerResumePage from "./Pages/SeekerPages/SeekerResumePage/SeekerResumePage.tsx";
import SeekerOffersPage from "./Pages/SeekerPages/SeekerOffersPage/SeekerOffersPage.tsx";
import EmptyOutlet from "./Pages/EmptyOutlet/EmptyOutlet.jsx";
import EmptyOutletNoFooter from "./Pages/EmptyOutlet/EmptyOutletNoFooter.jsx";
import CompanyEditInfo from "./Pages/EmployerPage/CompanyEditInfo/CompanyEditInfo.tsx";
import SeekerMessages from "./Pages/SeekerPages/SeekerMessages/SeekerMessages.jsx";
import SeekerFavoritesPage from "./Pages/SeekerPages/SeekerFavoritesPage/SeekerFavoritesPage.jsx";

import "@mantine/core/styles.css";
import "./App.scss";
import AdminPage from "./Pages/AdminPage/AdminPage.jsx";
import VacancyDetailsPage from "./Pages/VacancyDetailsPage/VacancyDetailsPage.jsx";
import CompanyFavorites from "./Pages/EmployerPage/CompanyFavorites/CompanyFavorites.jsx";
import CompanyCandidates from "./Pages/EmployerPage/CompanyCandidates/CompanyCandidates.jsx";
import EditDetailVacancy from "./Components/EditDetailVacancy/EditDetailVacancy.jsx";
import EditVacancyPage from "./Pages/EditVacancyPage/EditVacancyPage.jsx";

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

      {/* prettier-ignore */}
      <Routes>
        <Route path="/BuxOnline/" element={<EmptyOutlet />}>
          <Route index element={<Index />} />
          <Route path='vacancies' element={<AllVacancies />} />
          <Route path='vacancies/:id' element={<VacancyDescription />} />
        </Route>

        <Route path="/BuxOnline/" element={<EmptyOutletNoFooter />}>
          <Route path='login' element={<LogIn />} />
          <Route path='login/forgot-password' element={<ForgotPassword />} />
          <Route path='login/forgot-password/:email' element={<ForgotPassword />} />
          <Route path='register' element={<Register />} />
        </Route>

        {/* These are all the routes and pages related to company cabinet */}
        <Route path="/BuxOnline/employer/cabinet/:id" element={<EmptyOutlet />}>
          {/* the line below is responsible for the main page */}
          <Route index element={<EmployerPage />} />
          {/* all the other lines below are different paths and pages inside the cabinet */}
          <Route path="jobs" element={<CompanyVacancies />} />
          <Route path="messages" element={<CompanyMessage />} />
          <Route path="candidates" element={<CompanyCandidates />} />
          <Route path="favorites" element={<CompanyFavorites />} />

          <Route path="edit" element={<CompanyEditInfo/>} />
        </Route>

        {/* These are all the routes and pages related to seeker cabinet */}
        <Route path="/BuxOnline/employee/cabinet/:id" element={<EmptyOutlet />}>
          {/* the line below is responsible for the main page */}
          <Route index element={<SeekerCabinet />} />

          <Route path="edit" element={<SeekerCabinetEdit />} />

          {/* all the other lines below are different paths and pages inside the cabinet */}
          <Route path="resumes" element={<SeekerResumePage />} />
          <Route path="offers" element={<SeekerOffersPage />} />
          <Route path="messages" element={<SeekerMessages />} />
          <Route path="favorites" element={<SeekerFavoritesPage />} />
        </Route>

        {/* These are all the routes and pages related to moderator cabinet */}
        <Route
          path="/BuxOnline/moderator/cabinet/:id"
          element={<EmptyOutlet />}
        >
          {/* the line below is responsible for the main page */}
          <Route index element={<AdminPage />} />
          {/* all the other lines are different paths and pages inside the cabinet */}
          <Route path="resumes/:vacancyId" element={<VacancyDetailsPage />} />
          {/* <Route path="offers" element={<h1>Seeker offers</h1>} />
          <Route path="messages" element={<h1>Seeker Messages</h1>} />
          <Route path="favorites" element={<h1>Seeker Favorites</h1>} /> */}
          <Route path="edit/:vacancyId" element={<EditVacancyPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
