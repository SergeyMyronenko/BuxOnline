import React from "react";
import frame from '../../assets/indexFrameFooter.png';
import linkedin from '../../assets/indexLinkedinFooter.png';
import telegram from '../../assets/indexTelegramFooter.png';
import facebook from '../../assets/indexFacebookFooter.png';
import instagram from '../../assets/indexInstagramFooter.png';

import './Footer.scss';

export default function Footer(){
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-wrapper-up">
            <div className="footer-sidebar-wrapper-1">
              <div className="footer-sidebar-1-logo">
                <img
                  className="img-logo"
                  src={frame}
                  alt="img-logo"
                  height="36px"
                  width="36px"
                />
                <h2 className="footer-logo-name">Buxonline</h2>
              </div>
              <a href="#" className="link-linkedin">
                <img
                  className="logo-linkedin"
                  src={linkedin}
                  alt="logo-linkedin"
                />
              </a>
              <a href="#" className="link-telegram">
                <img
                  className="logo-telegram"
                  src={telegram}
                  alt="logo-telegram"
                />
              </a>
              <a href="#" className="link-facebook">
                <img
                  className="logo-facebook"
                  src={facebook}
                  alt="logo-facebook"
                />
              </a>
              <a href="#" className="link-instagram">
                <img
                  className="logo-instagram"
                  src={instagram}
                  alt="logo-instagram"
                />
              </a>
              {/* <p className="footer-text-logo">@2024-Всі права захищені</p> */}
            </div>

            <div className="footer-sidebar-wrapper-2">
              <h3 className="desc">Про нас</h3>
              <a href="#" className="footer-text">
                Для компаній
              </a>
              <a href="#" className="footer-text">
                Для рекрутерів
              </a>
              <a href="#" className="footer-text">
                Для кандидатів
              </a>
            </div>

            <div className="footer-sidebar-wrapper-3">
              <h3 className="platform">Платформа</h3>
              <a href="#" className="footer-text">
                Всі вакансії
              </a>
              <a href="#" className="footer-text">
                Всі кандидати
              </a>
              <a href="#" className="footer-text">
                Новини
              </a>
            </div>

            <div className="footer-sidebar-wrapper-4">
              <h3 className="law">Законодавство</h3>
              <a href="#" className="footer-text">
                Правила використання
              </a>
              <a href="#" className="footer-text">
                Згода користувача
              </a>
            </div>

            <div className="footer-sidebar-wrapper-5">
              <h3 className="sidebar-contacts">Контакти</h3>
              <div className="contacts-footer">
                <a href="#" className="contacts-email">
                  info@bux.com
                </a>
              </div>
              <div className="contacts-footer">
                <a href="#" className="contacts-tel">
                  +380 (98) 000 00 00
                </a>
              </div>
            </div>
          </div>
          <div className="footer-wrapper-down">
            <div className="footer-sidebar-wrapper-6">
              <p className="footer-text">@2024-Всі права захищені</p>
            </div>
            <div className="footer-sidebar-wrapper-7">
              <p className="footer-text text-right">
                Зроблено в рамках проекту Topizdato
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}