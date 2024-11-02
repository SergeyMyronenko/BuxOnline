import React from 'react';
import "./SeekerMessages.scss";

import WavyLine from "../../../Components/Icons/WavyLine";
import Pagination from '../../../Components/Pagination/Pagination';
import GmailIcon from '../../../Components/Icons/GmailIcon';
import CheckIcon from '../../../Components/Icons/CheckIcon';
import TelegramIcon from '../../../Components/Icons/TelegramIcon';

const SeekerMessages = () => {
    return (
        <div className="seeker-messages">
            <div className="seeker-messages-title">
                <WavyLine/>
                <h2>Повідомлення</h2>
            </div>
            <div className="seeker-messages-wrapper">
                
                <div className="seeker-messages-list">
                    <div className="seeker-massage-item">
                        <div className="seeker-message-text">
                            У вас 416 нових рекомендованих вакансій
                        </div>
                        <div className="seeker-message-check">
                            <div className="seeker-message-circle"></div>
                            <div className="seeker-message-time">36 хвилин тому</div>
                        </div>
                    </div>
                    <div className="seeker-massage-item">
                        <div className="seeker-message-text">
                            Ваші резюме за день переглянули 5 разів
                        </div>
                        <div className="seeker-message-check">
                            <div className="seeker-message-circle"></div>
                            <div className="seeker-message-time">1 годину тому</div>
                        </div>
                    </div>
                    <div className="seeker-massage-item">
                        <div className="seeker-message-text">
                            З’явилася нова вакансія за вашим резюме “Офіс-менеджер”
                        </div>
                        <div className="seeker-message-check">
                            <div className="seeker-message-circle"></div>
                            <div className="seeker-message-time">2 дня тому</div>
                        </div>
                    </div>
                    <div className="seeker-massage-item">
                        <div className="seeker-message-text">
                            Налаштуйте сповіщення, щоб отримувати повідомлення на електронну пошту
                        </div>
                        <div className="seeker-message-check">
                            <div className="seeker-message-circle"></div>
                            <div className="seeker-message-time">5 днів тому</div>
                        </div>
                    </div>
                    <div className="seeker-massage-item">
                        <div className="seeker-message-text">
                            Компанія “Faktor” пропонує вам вакансію
                        </div>
                        <div className="seeker-message-check">
                            <div className="seeker-message-circle"></div>
                            <div className="seeker-message-time">тиждень тому</div>
                        </div>
                    </div>
                    <Pagination/>
                </div>
                <div className="seeker-messages-messengers">
                    <div className="messengers-wrapper">
                        <div className="text-messengers">
                            <div className="text-1">
                                <span>Сповіщення</span>
                                <CheckIcon/>
                            </div>
                            <div className="text-2">
                                Отримуйте сповіщення зручним для вас способом:
                            </div>
                        </div>
                        <div className="gmail-telegram">
                            <div className="gmail-item">
                                <div className="messenger-button">
                                    <GmailIcon/>
                                    <span>Gmail</span>
                                </div>
                                <div className="connect-button">Підключено</div>
                            </div>
                            <div className="telegram-item">
                                <div className="messenger-button">
                                    <TelegramIcon/>
                                    <span>Telegram</span>
                                </div>
                                <div className="connect-button">Підключити</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeekerMessages;