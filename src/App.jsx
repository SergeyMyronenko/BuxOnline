import { Routes, Route } from "react-router";

import AllVacancies from "./Pages/AllVacancies/AllVacancies.jsx";
import VacancyDescription from "./Pages/VacancyDescription/VacancyDescription.jsx";
import Index from "./Pages/Index/Index";
import NotFound from "./Pages/NotFound/NotFound";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
import CompanyCabinet from "./Pages/EmployerPage/EmployerPage.jsx";
import CompanyMessage from "./Pages/EmployerPage/CompanyMessages/CompanyMessage.jsx";
import CompanyVacancies from "./Pages/EmployerPage/CompanyVacancies/CompanyVacancies.jsx";
import ForgotPassword from "./Pages/LogIn/ForgotPassword.jsx";
import SeekerResumePage from "./Pages/SeekerPage/MessagesAndEvents/SeekerResumePage.tsx";
import EmptyOutlet from "./Pages/EmptyOutlet/EmptyOutlet.jsx";
import "@mantine/core/styles.css";
import "./App.scss";
import AdminPage from "./Pages/AdminPage/AdminPage.jsx";
import VacancyDetailsPage from "./Pages/VacancyDetailsPage/VacancyDetailsPage.jsx";

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
        <Route path="/BuxOnline/" element={<Index />} />

        <Route path="/BuxOnline/vacancies" element={<AllVacancies />} />
        <Route
          path="/BuxOnline/vacancies/:id"
          element={<VacancyDescription />}
        />

        <Route path="/BuxOnline/login" element={<LogIn />} />
        <Route
          path="/BuxOnline/login/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/BuxOnline/login/forgot-password/:email"
          element={<ForgotPassword />}
        />

        <Route path="/BuxOnline/register" element={<Register />} />

        {/* These are all the routes and pages related to company cabinet */}
        <Route path="/BuxOnline/company/cabinet/:id" element={<EmptyOutlet />}>
          {/* the line below is responsible for the main page */}
          <Route index element={<CompanyCabinet />} />
          {/* all the other lines below are different paths and pages inside the cabinet */}
          <Route path="jobs" element={<CompanyVacancies />} />
          <Route path="messages" element={<CompanyMessage />} />
          <Route path="candidates" element={<h1>Company Candidates</h1>} />
          <Route path="favorites" element={<h1>Company Favorites</h1>} />
        </Route>

        {/* These are all the routes and pages related to seeker cabinet */}
        <Route path="/BuxOnline/seeker/cabinet/:id" element={<EmptyOutlet />}>
          {/* the line below is responsible for the main page */}
          <Route index element={<h1>Seeker cabinet</h1>} />

          {/* all the other lines below are different paths and pages inside the cabinet */}
          <Route path="resumes" element={<SeekerResumePage />} />
          <Route path="offers" element={<h1>Seeker offers</h1>} />
          <Route path="messages" element={<h1>Seeker Messages</h1>} />
          <Route path="favorites" element={<h1>Seeker Favorites</h1>} />
        </Route>

        {/* These are all the routes and pages related to moderator cabinet */}
        <Route
          path="/BuxOnline/moderator/cabinet/:id"
          element={<EmptyOutlet />}
        >
          {/* the line below is responsible for the main page */}
          <Route index element={<AdminPage />} />
          {/* all the other lines are different paths and pages inside the cabinet */}
          <Route path="resumes/:id" element={<VacancyDetailsPage />} />
          <Route path="offers" element={<h1>Seeker offers</h1>} />
          <Route path="messages" element={<h1>Seeker Messages</h1>} />
          <Route path="favorites" element={<h1>Seeker Favorites</h1>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
