import React from "react";
import "./AllVacancies.scss";
//імпорт ассетів
import vacancyBackgroungImg from "../../assets/vacancyBackgroundImg.png";
import vacancyTitleImg from "../../assets/vacancyTitleImg.png";

//імпорт компонентів
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Accordion from "../../Components/Accordion/Accordion";
import InputCheckbox from "../../Components/Input/InputCheckbox/InputCheckbox";
import SolidButton from "../../Components/Buttons/SolidButton/SolidButton";

/**
 * Vacancy component renders the vacancy page layout.
 * It includes a header, navigation, sidebar with vacancy options, and a main content area.
 * The sidebar contains various categories of job roles with checkboxes for filtering.
 *
 * @component
 * @example
 * return (
 *   <Vacancy />
 * )
 *
 * @returns {JSX.Element} The rendered vacancy page component.
 */
function AllVacancies() {
  return (
    <>
      <div className="vacancy-wrapper">
        <div className="vacancy-sidebar-wrapper">
          <div className="vacancy-sidebar">
            <div className="vacancy-title">
              <img src={vacancyTitleImg} alt="" />
              <h2>Вакансії</h2>
            </div>
            <form className="vacancy-options">
              <Accordion accordionTitle="Software development">
                <InputCheckbox label="Software Engineer"></InputCheckbox>
                <InputCheckbox label="Full Stack Developer"></InputCheckbox>
                <InputCheckbox label="Backend Developer"></InputCheckbox>
                <InputCheckbox label="Frontend Developer"></InputCheckbox>
                <InputCheckbox label="Web Developer"></InputCheckbox>
                <InputCheckbox label="Mobile Developer"></InputCheckbox>
                <InputCheckbox label="DevOps Engineer"></InputCheckbox>
                <InputCheckbox label="Data Scientist"></InputCheckbox>
                <InputCheckbox label="Machine Learning Engineer"></InputCheckbox>
                <InputCheckbox label="AI Specialist"></InputCheckbox>
                <InputCheckbox label="Blockchain Developer"></InputCheckbox>
                <InputCheckbox label="Data Engineer"></InputCheckbox>
              </Accordion>
              <Accordion accordionTitle="IT Infrastructure">
                <InputCheckbox label="System Administrator" />
                <InputCheckbox label="Network Engineer" />
                <InputCheckbox label="Cloud Engineer" />
                <InputCheckbox label="Security Engineer" />
                <InputCheckbox label="IT Technician" />
                <InputCheckbox label="IT Support Specialist" />
                <InputCheckbox label="IT Manager" />
                <InputCheckbox label="IT Operations Manager" />
                <InputCheckbox label="IT Infrastructure Manager" />
              </Accordion>
              <Accordion accordionTitle="IT Management & Strategy">
                <InputCheckbox label="Project Manager" />
                <InputCheckbox label="IT Project Manager" />
                <InputCheckbox label="IT Coordinator" />
                <InputCheckbox label="IT Analyst" />
                <InputCheckbox label="IT Consultant" />
                <InputCheckbox label="IT Architect" />
                <InputCheckbox label="IT Strategist" />
                <InputCheckbox label="IT Service Manager" />
              </Accordion>
              <Accordion accordionTitle="Cybersecurity">
                <InputCheckbox label="IT Security Specialist" />
                <InputCheckbox label="IT Auditor" />
                <InputCheckbox label="IT Compliance Analyst" />
                <InputCheckbox label="IT Risk Manager" />
              </Accordion>
              <Accordion accordionTitle="Product & UX Design">
                <InputCheckbox label="UX Designer" />
                <InputCheckbox label="UI Designer" />
                <InputCheckbox label="Product Manager" />
                <InputCheckbox label="Technical Writer" />
              </Accordion>
              <Accordion accordionTitle="Marketing & Content">
                <InputCheckbox label="SEO Specialist" />
                <InputCheckbox label="Digital Marketer" />
                <InputCheckbox label="Social Media Manager" />
                <InputCheckbox label="E-commerce Specialist" />
                <InputCheckbox label="Content Strategist" />
                <InputCheckbox label="Email Marketing Specialist" />
                <InputCheckbox label="CRM Specialist" />
              </Accordion>
              <Accordion accordionTitle="Data Analysis & Business">
                <InputCheckbox label="Business Analyst" />
                <InputCheckbox label="Data Analyst" />
                <InputCheckbox label="IT Quality Assurance Analyst" />
                <InputCheckbox label="IT Trainer" />
                <InputCheckbox label="Scrum Master" />
              </Accordion>
              <SolidButton width={200} type="submit">
                Застосувати
              </SolidButton>
            </form>
          </div>
        </div>
        <div className="vacancy-browse">
          <img src={vacancyBackgroungImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default AllVacancies;
