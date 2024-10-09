import React from 'react';
import './CompanyFavorites.scss';

import TitleFavorites from './TitleFavorites/TitleFavorites';
import TitleProfile from './TitleProfile/TitleProfile';
import BlockFavorites from './BlockFavorites/BlockFavorites';
import DetailsCandidate from './DetailsCandidate/DetailsCandidate';

const CompanyFavorites = () => {
 
    let flag = false;

    return (
        <div>
            <div className="my-div">
                { flag ? <TitleFavorites /> : <TitleProfile /> }
            </div>
            { flag ? <BlockFavorites /> : <DetailsCandidate /> }
        </div>
    );
};

export default CompanyFavorites;