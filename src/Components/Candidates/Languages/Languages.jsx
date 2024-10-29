import React from 'react';
import './Languages.scss';

import english from '../../../assets/united-kingdom 1.png';
import spanish from '../../../assets/Mask group.png';
import ukrainian from '../../../assets/Mask group 2.png';

const Languages = () => {
    return (
        <div className="languages">
            <div className="language">
                <img src={english}/>
                <span><span className="blue">English</span> - B2 (Upper Intermediate) </span>
            </div>
            <div className="language">
                <img src={spanish}/>
                <span><span className="blue">Spanish</span> - B1 (Intermediate)</span>
            </div>
            <div className="language">
                <img src={ukrainian}/>
                <span><span className="blue">Ukrainian</span> - C2 (Proficiency)</span>
            </div>
        </div>
    );
};

export default Languages;