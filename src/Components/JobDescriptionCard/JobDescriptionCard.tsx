import React, { FC, ReactNode } from 'react';
import './JobDescriptionCard.scss';
interface JobDescriptionCardProps {
    title: string;
    description: any[];
    icon: ReactNode;
}

/**
 * JobDescriptionCard component displays a job description card with a title, icon, and a list of job types.
 *
 * @component
 * @param {JobDescriptionCardProps} props - The properties for the JobDescriptionCard component.
 * @param {string} props.title - The title of the job.
 * @param {string[]} props.description - An array of job types (e.g., 'part-time', 'full-time', 'hybrid').
 * @param {React.ReactNode} props.icon - The icon to display next to the job title.
 *
 * @returns {JSX.Element} A JSX element representing the job description card.
 */
const JobDescriptionCard: FC<JobDescriptionCardProps> = ({ title, description, icon }) => {
    return (
        <div className="job-description-card">
            <div className="job-description-title">
                <div className="icon">{icon}</div>
                <p>{title}</p>
            </div>
            <ul className="job-description-list">
                {description.map((desc, index) => (
                    <li key={index}>
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobDescriptionCard;