import React from 'react';
import './CompanyFavorites.scss';

import TitleFavorites from './TitleFavorites';
import TitleProfile from './TitleProfile';
import BlockFavorites from './BlockFavorites';

const CompanyFavorites = () => {
 
    const flag = false;

    return (
        <div>
            <div className="my-div">
                { flag ? <TitleFavorites /> : <TitleProfile /> }
            </div>
            <BlockFavorites />
        </div>
    );
};

export default CompanyFavorites;