import React from "react";
import './JobExperience.scss';

const JobExperience = ({ style }) => {
    return (
        <div class="job-experience" style={style}>
            <p className="job-experience-text">
                Start-up Project. It is a Management Employee Assistant
                application which offers a solution for effective employee
                management within the company.
            </p>
            <ul className="job-experience-list">
                <li>Participated in frontend and backend architecture decisions;</li>
                <li>Implemented Ul reusable components with React.js;</li>
                <li>Designed data structure for the project;</li>
                <li>Created and maintained RESTful APIs to facilitate data exchange between the frontend and backend;</li>
                <li>Worked on unit tests;</li>
                <li>Work on business requirements and project documentation.</li>
            </ul>
        </div>
    );
};

export default JobExperience;