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

const DetailsCandidate = () => {
    return (
        <div className="details-candidate">
            <div className="main-info">
                <PersonalData />
                <ContactData />
                <SalaryRange />
                <RoleInterest />
                <Languages />
                <TypeEnployment />
                <WorkingEnvironment />
                <BusinessType />
            </div>
            <div className="work-history">
                <h2 className="work-history-title">Трудова історія</h2>
                <div className="work-history-wrapper">

                </div>
            </div>
        </div>
    );
};

export default DetailsCandidate;