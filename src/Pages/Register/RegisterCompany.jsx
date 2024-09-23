import React from 'react';
import SolidButton from '../../Components/Buttons/SolidButton/SolidButton';
import InputField from '../../Components/Input/InputField/InputField';
import SelectField from '../../Components/Input/InputSelect/InputSelect';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import './Register.scss';
/**
 * RegisterCompany component renders a form for registering a company.
 * 
 * This component includes:
 * - An SVG icon and a title "Деталі компанії" (Company Details).
 * - An input field for the company name.
 * - A select field for the company type with options "Компанія" (Company) and "Агентство" (Agency).
 * - A submit button that navigates to the 'onboard' route.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const RegisterCompany = () => {
    return (
        <>        
        <Outlet></Outlet>
            <div className="form-wrapper">

                <form>
                    <span className='title'>
                        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.46061 16.25L12.2808 12.575C11.7841 12.525 11.4149 12.5 11.0074 12.5C7.60744 12.5 0.820312 14.175 0.820312 17.5V20H12.2808L8.46061 16.25ZM11.0074 10C13.8216 10 16.1009 7.7625 16.1009 5C16.1009 2.2375 13.8216 0 11.0074 0C8.1932 0 5.91385 2.2375 5.91385 5C5.91385 7.7625 8.1932 10 11.0074 10ZM16.6994 20.625L12.2808 16.25L14.0635 14.4875L16.6994 17.0875L23.2319 10.625L25.0146 12.3875L16.6994 20.625Z" fill="#282828" />
                        </svg>
                        <h2>Деталі компанії</h2>
                    </span>
                 

                    <InputField label='Назва компанії' type='text' placeholder='Назва компанії' id='company-name'></InputField>
                    <SelectField label="Тип компанії" options={["Компанія", "Агентство"]}></SelectField>
                
                    <Link to ='onboard'>
                        <SolidButton type='submit' fontSize={16}>Далі</SolidButton>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default RegisterCompany;