import React, {useEffect} from 'react';
import './EmptyList.scss';
import EmptyIcon from '../Icons/EmptyIcon';

const EmptyList = () => {
    return (
        <div className="empty-list">
            <div className="empty-list-content">
                <EmptyIcon/>
                <div className="empty-list-text">
                    <div className="empty-list-nothing">
                        {`У вас поки що немає`}
                    </div>
                    <div className="empty-list-vacancies-link">
                        Нові вакансії ви можете подивитися <a href="#">ТУТ</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyList;