import React from 'react';
import './SeekerFavoritesPage.scss';

import WavyLine from '../../../Components/Icons/WavyLine';
import Card from '../../../Components/Card/Card';
import Pagination from '../../../Components/Pagination/Pagination';
import { favoritesList } from './fakeData';

const SeekerFavoritesPage = () => {
    const list = favoritesList.map((item) => {
        return (
            <Card 
                cardInfo={item}
                btnDetail={''}
                btnApply={'Надіслати резюме'}
                type={'seeker-vacancies'}
                width={'100%'}
                user={''}
                skills={''}
            />
        );
    });

    return (
        <div className="seeker-favorites-page">
            <div className="seeker-favorites-title">
                <WavyLine/>
                <h2>Обрані вакансії</h2>
            </div>
            <div className="seeker-favotites-list">
                { list }
            </div>
            <Pagination/>
        </div>
    );
};

export default SeekerFavoritesPage;