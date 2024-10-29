import React, { useState } from 'react';
import './CompanyFavorites.scss';

import TitleProfile from '../../../Components/Candidates/TitleProfile/TitleProfile';
import BlockFavorites from '../../../Components/Candidates/BlockCandidates/BlockCandidates';
import DetailsCandidate from '../../../Components/Candidates/DetailsCandidate/DetailsCandidate';
import TitleCandidates from '../../../Components/Candidates/TitleCandidates/TitleCandidates';

const CompanyFavorites = () => {
 
    const flag = true;

    const [name, setName] = useState(flag);

    const switcher = () => {
        setName(!name);
    };

    return (
        <div>
            <div className="my-div">
                { 
                    name ? <TitleCandidates textTitle="Обрані кандидати" /> : 
                    <TitleProfile switcher={switcher} /> 
                }
            </div>
            { name ? <BlockFavorites switcher={switcher} /> : <DetailsCandidate /> }
        </div>
    );
};

export default CompanyFavorites;