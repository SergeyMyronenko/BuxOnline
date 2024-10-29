import React, {useState} from 'react';
import './JobHistory.scss';

import JobHistoryItem from '../JobHistoryItem/JobHistoryItem';

export const JobHistory = () => {
    const jobs = [
        {
            position: 'Software Development Engineer',
            company: 'Akvelon',
            date: 'Sep 2020 - Jan 2022',
        },

        {
            position: 'Software Development Engineer',
            company: 'Akvelon',
            date: 'Sep 2020 - Jan 2022',
        },

        {
            position: 'Software Development Engineer',
            company: 'Akvelon',
            date: 'Sep 2020 - Jan 2022',
        }
    ];

    const jobsList = jobs.map((item, index) => {
        return (
            <div class="job-history-wrapper">
                <JobHistoryItem key={index} {...item}/>
            </div>
        );
    });

    return (
        <div className="job-history">
            { jobsList }
        </div>
    );
};

export default JobHistory;