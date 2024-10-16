import React from 'react';
import './DetailsCandidate.scss';

import PersonalData from '../PersonalData/PersonalData';
import ContactData from '../ContactData/ContactData';
import SalaryRange from '../SalaryRange/SalaryRange';
import RoleInterest from '../RoleInterest/RoleInterest';
import Languages from '../Languages/Languages';
import TypeEnployment from '../TypeEnployment/TypeEmployment';
import WorkingEnvironment from '../WorkingEnvironment/WorkingEnvironment';
import BusinessType from '../BusinessType/BusinessType';
import JobHistory from '../JobHistory/JobHistory';

const DetailsCandidate = () => {
    return (
        <div className="details-candidate">
            <div className="main-info">
                <PersonalData />
                <ContactData />
                <div className="main-info-child">
                    <div className="main-info-title">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7H2.5M20.5 7C20.8978 7 21.2794 7.15804 21.5607 7.43934C21.842 7.72065 22 8.10218 22 8.5V12.4M20.5 7L14.5 1M2.5 7C2.10218 7 1.72064 7.15804 1.43934 7.43934C1.15804 7.72065 1 8.10218 1 8.5V23.5C1 23.8978 1.15804 24.2794 1.43934 24.5607C1.72064 24.842 2.10218 25 2.5 25H20.5C20.8978 25 21.2794 24.842 21.5607 24.5607C21.842 24.2794 22 23.8978 22 23.5V19.6M2.5 7L8.5 1L14.5 7M23.5 13H17.5C16.7044 13 15.9413 13.3161 15.3787 13.8787C14.8161 14.4413 14.5 15.2044 14.5 16C14.5 16.7957 14.8161 17.5587 15.3787 18.1213C15.9413 18.6839 16.7044 19 17.5 19H23.5C23.8978 19 24.2794 18.842 24.5607 18.5607C24.842 18.2794 25 17.8978 25 17.5V14.5C25 14.1022 24.842 13.7206 24.5607 13.4393C24.2794 13.158 23.8978 13 23.5 13Z" stroke="#3F7EE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3>Діапазон заробітної плати</h3>
                    </div>
                    <SalaryRange />
                </div>
                <div className="main-info-child">
                    <div className="main-info-title">
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.375 0C5.47989 0 4.62145 0.35558 3.98851 0.988515C3.35558 1.62145 3 2.47989 3 3.375V14.625C3 15.5201 3.35558 16.3785 3.98851 17.0115C4.62145 17.6444 5.47989 18 6.375 18H21.075C20.4391 17.3772 19.972 16.6029 19.7175 15.75H6.375C6.07663 15.75 5.79048 15.6315 5.5795 15.4205C5.36853 15.2095 5.25 14.9234 5.25 14.625V3.375C5.25 3.07663 5.36853 2.79048 5.5795 2.5795C5.79048 2.36853 6.07663 2.25 6.375 2.25H23.625C23.9234 2.25 24.2095 2.36853 24.4205 2.5795C24.6315 2.79048 24.75 3.07663 24.75 3.375V9C25.5555 9 26.3175 9.18 27 9.5055V3.375C27 2.93179 26.9127 2.49292 26.7431 2.08344C26.5735 1.67397 26.3249 1.30191 26.0115 0.988515C25.6981 0.675117 25.326 0.426516 24.9166 0.256906C24.5071 0.0872966 24.0682 0 23.625 0H6.375ZM1.125 20.25H16.962C16.6573 20.8398 16.4988 21.4942 16.5 22.158V22.3125C16.5 22.3755 16.501 22.438 16.503 22.5H1.125C0.826631 22.5 0.540483 22.3815 0.329505 22.1705C0.118526 21.9595 0 21.6734 0 21.375C0 21.0766 0.118526 20.7905 0.329505 20.5795C0.540483 20.3685 0.826631 20.25 1.125 20.25ZM28.5 14.25C28.5 15.2446 28.1049 16.1984 27.4016 16.9016C26.6984 17.6049 25.7446 18 24.75 18C23.7554 18 22.8016 17.6049 22.0984 16.9016C21.3951 16.1984 21 15.2446 21 14.25C21 13.2554 21.3951 12.3016 22.0984 11.5983C22.8016 10.8951 23.7554 10.5 24.75 10.5C25.7446 10.5 26.6984 10.8951 27.4016 11.5983C28.1049 12.3016 28.5 13.2554 28.5 14.25ZM31.5 22.3125C31.5 24.6465 29.571 27 24.75 27C19.929 27 18 24.6555 18 22.3125V22.158C18 20.688 19.191 19.5 20.6595 19.5H28.8405C30.3105 19.5 31.5 20.6895 31.5 22.158V22.3125Z" fill="#3F7EE8"/>
                        </svg>
                        <h3>Роль інтересу</h3>
                    </div>
                    <RoleInterest />
                </div>
                <div className="main-info-child">
                    <div className="main-info-title">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3636 0H3.27273C1.47273 0 0 1.47273 0 3.27273V22.9091L4.90909 18H13.0909V16.3636C13.0909 12.7636 16.02 9.81818 19.6364 9.81818V3.27273C19.6364 1.47273 18.1636 0 16.3636 0ZM16.3636 4.90909H13.9091C13.3527 6.85636 12.3382 8.67273 10.9309 10.2436L10.8982 10.2764L12.96 12.3218L12.3545 13.9745L9.81818 11.4545L5.72727 15.5455L4.59818 14.3509L8.73818 10.2764C7.73823 9.16898 6.92075 7.90961 6.31636 6.54545H7.93636C8.44364 7.52727 9.06545 8.46 9.81818 9.29455C10.9635 8.02242 11.8377 6.53024 12.3873 4.90909H3.27273V3.27273H9V1.63636H10.6364V3.27273H16.3636V4.90909ZM32.7273 13.0909H19.6364C17.8364 13.0909 16.3636 14.5636 16.3636 16.3636V27.8182C16.3636 29.6182 17.8364 31.0909 19.6364 31.0909H31.0909L36 36V16.3636C36 14.5636 34.5273 13.0909 32.7273 13.0909ZM30.4855 29.4545L29.0945 25.7727H23.2691L21.8945 29.4545H19.44L24.9545 14.7273H27.4091L32.94 29.4545H30.4855ZM26.1818 18L28.1782 23.3182H24.2018L26.1818 18Z" fill="#3F7EE8"/>
                        </svg>
                        <h3>Mови</h3>
                    </div>
                    <Languages />
                </div>
                <div className="main-info-child">
                    <div className="main-info-title">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.75 3C13.3576 3 12.0223 3.55312 11.0377 4.53769C10.0531 5.52226 9.5 6.85761 9.5 8.25C9.5 9.64239 10.0531 10.9777 11.0377 11.9623C12.0223 12.9469 13.3576 13.5 14.75 13.5C16.1424 13.5 17.4777 12.9469 18.4623 11.9623C19.4469 10.9777 20 9.64239 20 8.25C20 6.85761 19.4469 5.52226 18.4623 4.53769C17.4777 3.55312 16.1424 3 14.75 3ZM6.5 8.25C6.5 6.06196 7.36919 3.96354 8.91637 2.41637C10.4635 0.869194 12.562 0 14.75 0C16.938 0 19.0365 0.869194 20.5836 2.41637C22.1308 3.96354 23 6.06196 23 8.25C23 10.438 22.1308 12.5365 20.5836 14.0836C19.0365 15.6308 16.938 16.5 14.75 16.5C12.562 16.5 10.4635 15.6308 8.91637 14.0836C7.36919 12.5365 6.5 10.438 6.5 8.25ZM24.5 18.75C23.1076 18.75 21.7723 19.3031 20.7877 20.2877C19.8031 21.2723 19.25 22.6076 19.25 24C19.25 25.3924 19.8031 26.7277 20.7877 27.7123C21.7723 28.6969 23.1076 29.25 24.5 29.25C25.8924 29.25 27.2277 28.6969 28.2123 27.7123C29.1969 26.7277 29.75 25.3924 29.75 24C29.75 22.6076 29.1969 21.2723 28.2123 20.2877C27.2277 19.3031 25.8924 18.75 24.5 18.75ZM16.25 24C16.25 22.9166 16.4634 21.8438 16.878 20.8429C17.2926 19.8419 17.9003 18.9325 18.6664 18.1664C19.4325 17.4003 20.3419 16.7926 21.3429 16.378C22.3438 15.9634 23.4166 15.75 24.5 15.75C25.5834 15.75 26.6562 15.9634 27.6571 16.378C28.6581 16.7926 29.5675 17.4003 30.3336 18.1664C31.0997 18.9325 31.7074 19.8419 32.122 20.8429C32.5366 21.8438 32.75 22.9166 32.75 24C32.75 26.188 31.8808 28.2865 30.3336 29.8336C28.7865 31.3808 26.688 32.25 24.5 32.25C22.312 32.25 20.2135 31.3808 18.6664 29.8336C17.1192 28.2865 16.25 26.188 16.25 24ZM9.5 21C7.9087 21 6.38258 21.6321 5.25736 22.7574C4.13214 23.8826 3.5 25.4087 3.5 27H14.075V30H0.5V27C0.5 24.6131 1.44821 22.3239 3.13604 20.636C4.82387 18.9482 7.11305 18 9.5 18H14V21H9.5ZM26 20.628V23.379L28.121 25.5L26 27.621L23 24.621V20.628H26Z" fill="#3F7EE8"/>
                        </svg>
                        <h3>Вид зайнятості</h3>
                    </div>
                    <TypeEnployment />
                </div>
                <div className="main-info-child">
                    <div className="main-info-title">
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.375 0C5.47989 0 4.62145 0.35558 3.98851 0.988515C3.35558 1.62145 3 2.47989 3 3.375V14.625C3 15.5201 3.35558 16.3785 3.98851 17.0115C4.62145 17.6444 5.47989 18 6.375 18H21.075C20.4391 17.3772 19.972 16.6029 19.7175 15.75H6.375C6.07663 15.75 5.79048 15.6315 5.5795 15.4205C5.36853 15.2095 5.25 14.9234 5.25 14.625V3.375C5.25 3.07663 5.36853 2.79048 5.5795 2.5795C5.79048 2.36853 6.07663 2.25 6.375 2.25H23.625C23.9234 2.25 24.2095 2.36853 24.4205 2.5795C24.6315 2.79048 24.75 3.07663 24.75 3.375V9C25.5555 9 26.3175 9.18 27 9.5055V3.375C27 2.93179 26.9127 2.49292 26.7431 2.08344C26.5735 1.67397 26.3249 1.30191 26.0115 0.988515C25.6981 0.675117 25.326 0.426516 24.9166 0.256906C24.5071 0.0872966 24.0682 0 23.625 0H6.375ZM1.125 20.25H16.962C16.6573 20.8398 16.4988 21.4942 16.5 22.158V22.3125C16.5 22.3755 16.501 22.438 16.503 22.5H1.125C0.826631 22.5 0.540483 22.3815 0.329505 22.1705C0.118526 21.9595 0 21.6734 0 21.375C0 21.0766 0.118526 20.7905 0.329505 20.5795C0.540483 20.3685 0.826631 20.25 1.125 20.25ZM28.5 14.25C28.5 15.2446 28.1049 16.1984 27.4016 16.9016C26.6984 17.6049 25.7446 18 24.75 18C23.7554 18 22.8016 17.6049 22.0984 16.9016C21.3951 16.1984 21 15.2446 21 14.25C21 13.2554 21.3951 12.3016 22.0984 11.5983C22.8016 10.8951 23.7554 10.5 24.75 10.5C25.7446 10.5 26.6984 10.8951 27.4016 11.5983C28.1049 12.3016 28.5 13.2554 28.5 14.25ZM31.5 22.3125C31.5 24.6465 29.571 27 24.75 27C19.929 27 18 24.6555 18 22.3125V22.158C18 20.688 19.191 19.5 20.6595 19.5H28.8405C30.3105 19.5 31.5 20.6895 31.5 22.158V22.3125Z" fill="#3F7EE8"/>
                        </svg>
                        <h3>Робоче середовище</h3>
                    </div>
                    <WorkingEnvironment />
                </div>
                <div className="main-info-child">
                    <div className="main-info-title">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.0645 11.065C32.9395 9.19002 32.0845 7.00002 31.0645 5.93502L26.5645 1.43502C24.6745 -0.439984 22.4995 0.415016 21.4345 1.43502L18.8845 4.00002H14.9995C12.1495 4.00002 10.4995 5.50002 9.65953 7.22502L2.99953 13.885V19.885L1.93453 20.935C0.0595273 22.825 0.914527 25 1.93453 26.065L6.43453 30.565C7.24453 31.375 8.11453 31.675 8.93953 31.675C10.0045 31.675 10.9795 31.15 11.5645 30.565L15.6145 26.5H20.9995C23.5495 26.5 24.8395 24.91 25.3045 23.35C26.9995 22.9 27.9295 21.61 28.3045 20.35C30.6295 19.75 31.4995 17.545 31.4995 16V11.5H30.6145L31.0645 11.065ZM28.4995 16C28.4995 16.675 28.2145 17.5 26.9995 17.5H25.4995V19C25.4995 19.675 25.2145 20.5 23.9995 20.5H22.4995V22C22.4995 22.675 22.2145 23.5 20.9995 23.5H14.3845L9.46453 28.42C8.99953 28.855 8.72953 28.6 8.56453 28.435L4.07953 23.965C3.64453 23.5 3.89953 23.23 4.06453 23.065L5.99953 21.115V15.115L8.99953 12.115V14.5C8.99953 16.315 10.1995 19 13.4995 19C16.7995 19 17.9995 16.315 17.9995 14.5H28.4995V16ZM28.9345 8.93502L26.3845 11.5H14.9995V14.5C14.9995 15.175 14.7145 16 13.4995 16C12.2845 16 11.9995 15.175 11.9995 14.5V10C11.9995 9.31002 12.2545 7.00002 14.9995 7.00002H20.1145L23.5345 3.58002C23.9995 3.14502 24.2695 3.40002 24.4345 3.56502L28.9195 8.03502C29.3545 8.50002 29.0995 8.77002 28.9345 8.93502Z" fill="#3F7EE8"/>
                        </svg>
                        <h3>Тип бізнесу</h3>
                    </div>
                    <BusinessType />
                </div>
            </div>
            <div className="work-history">
                <h2 className="work-history-title">Трудова історія</h2>
                <JobHistory/> 
            </div>
        </div>
    );
};

export default DetailsCandidate;