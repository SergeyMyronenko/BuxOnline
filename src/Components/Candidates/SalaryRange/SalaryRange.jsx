import React from "react";
import './SalaryRange.scss';

const SalaryRange = () => {
    return (
        <div className="salary-range">
            <div className="salary-year">$36,000 - $42,000 <span>в рік</span></div>
            <div className="salary-month">
                <span>Oчікуваний розмір місячної заробітної плати:</span><br/>
                <span>$3,000 - $3,500 в місяць</span>
            </div>
        </div>
    );
}

export default SalaryRange;