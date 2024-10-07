import React from 'react';
import './BlockFavorites.scss';

import ItemFavorite from './ItemFavorite';

const BlockFavorites = () => {
    const flag = false;

    return (
        <div className='block-list'>
            { 
                flag ?  
                
                <ul>
                    <li>

                    </li>
                </ul> :
            
                <span className="warning">У вас ще немає кандидатів</span>
            
            }
        </div>
    );
};

export default BlockFavorites;