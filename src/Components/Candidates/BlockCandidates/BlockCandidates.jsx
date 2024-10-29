import React from 'react';
import './BlockCandidates.scss';

import ItemFavorite from '../ItemFavorite/ItemFavorite';

const BlockCandidates = ({ switcher }) => {
    const flag = true;

    const candidates = [
        { 
            name: 'Шевченко Олена', 
            position: 'Back-end engineer', 
            place: 'Польша', 
            salary: '$3,000 / міс' 
        },

        { 
            name: 'Пономарчук Георгій', 
            position: 'Back-end engineer', 
            place: 'Україна, Київ', 
            salary: '$2,500 / міс' 
        }
    ];

    const candidatesList = candidates.map((item) => {
        return <ItemFavorite switcher={switcher} {...item} />;
    });

    return (
        <div className='block-list'>
            { 
                flag ?  
                
                <ul>
                    <li>
                        { candidatesList }
                    </li>
                </ul> :
            
                <span className="warning">У вас ще немає кандидатів</span>
            
            }
        </div>
    );
};

export default BlockCandidates;