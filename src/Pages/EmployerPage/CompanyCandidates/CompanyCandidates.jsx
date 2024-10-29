import React, { useState } from 'react';
import './CompanyCandidates.scss';

import TitleFavorites from '../../../Components/Candidates/TitleCandidates/TitleCandidates';
import TitleProfile from '../../../Components/Candidates/TitleProfile/TitleProfile';
import BlockCandidates from '../../../Components/Candidates/BlockCandidates/BlockCandidates';
import DetailsCandidate from '../../../Components/Candidates/DetailsCandidate/DetailsCandidate';

const CompanyCandidates = () => {
    
    const flag = true;

    const [name, setName] = useState(flag);
 
    const switcher = () => {
        setName(!name);
    };

    return (
        <div>
            <div className="my-div">
                { 
                  name ? <TitleFavorites textTitle="Відгуки кандидатів" /> : 
                  <TitleProfile switcher={switcher} /> 
                }
            </div>
            { name ? <BlockCandidates switcher={switcher} /> : <DetailsCandidate /> }
        </div>
    );
};

export default CompanyCandidates;