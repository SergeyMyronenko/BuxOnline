import React from 'react';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

import SolidButton from '../../Components/Buttons/SolidButton/SolidButton';

import './LogIn.scss';
const LogIn = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <div className="form-wrapper">

                <form>
                     <h1>Вхід</h1>
                     <p>Увійдіть до свого облікового запису через:</p>
                      <div className="media-login">
                        <span>Google</span>
                        <span>Linkedin</span>
                        <span>GitHub</span>
                        </div>  
                        <p>Або за допомогою адресу електронної пошти</p>
                    <div>
                        <label htmlFor="username">E-mail:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <SolidButton type='submit'>Вхід</SolidButton>
                </form>
            </div>
            
        </>
    );
};

export default LogIn;