import React from 'react';
import './CompanyFavorites.scss';

import TitleFavorites from './TitleFavorites';
import TitleProfile from './TitleProfile';

const CompanyFavorites = () => {
 
    const flag = false;

    return (
        <div className="my-div">
            { flag ? <TitleFavorites /> : <TitleProfile /> }
        </div>
    );
};

export default CompanyFavorites;