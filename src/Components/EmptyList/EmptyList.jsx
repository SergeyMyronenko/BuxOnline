import React, {useEffect, useRef, useState, useMemo} from 'react';
import './EmptyList.scss';
import EmptyIcon from '../Icons/EmptyIcon';

const EmptyList = ({ text }) => {
    const refFirstElement = useRef(null);
    const [widthElement, setWidthElement] = useState(0);

    useEffect(() => {
        if (refFirstElement.current) {
            const width = refFirstElement.current.offsetWidth;
            setWidthElement(width);
        }
    }, []);

    const styles = useMemo(() => {
        return widthElement > 0 ? {
            width: `${widthElement}px` 
        } : {};
    }, [widthElement]);

    return (
        <div className="empty-list">
            <div className="empty-list-content">
                <EmptyIcon/>
                <div className="empty-list-text">
                    <div className="empty-list-nothing" ref={refFirstElement}>
                        {`У вас поки що немає ${text}`}
                    </div>
                    <div className="empty-list-vacancies-link" style={styles}>
                        Нові вакансії ви можете подивитися <a href="#">ТУТ</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyList;