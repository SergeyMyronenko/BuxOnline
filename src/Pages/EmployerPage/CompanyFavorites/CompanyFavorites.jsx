import React, { useState } from 'react';
import './CompanyFavorites.scss';

import TitleFavorites from './TitleFavorites/TitleFavorites';
import TitleProfile from './TitleProfile/TitleProfile';
import BlockFavorites from './BlockFavorites/BlockFavorites';
import DetailsCandidate from './DetailsCandidate/DetailsCandidate';

const CompanyFavorites = () => {
 
    const flag = true;

    const [name, setName] = useState(flag);

    const switcher = () => {
        setName(!name);
    };

    return (
        <div>
            <div className="my-div">
                { name ? <TitleFavorites /> : <TitleProfile switcher={switcher} /> }
            </div>
            { name ? <BlockFavorites switcher={switcher} /> : <DetailsCandidate /> }
        </div>
    );
};

export default CompanyFavorites;