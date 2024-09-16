import React from "react";
import frame from '../../Images/frame-footer.png';
import linkedin from '../../Images/linkedin-footer.png';
import telegram from "../../Images/telegram-footer.png";
import facebook from "../../Images/facebook-footer.png";
import instagram from "../../Images/instagram-footer.png";

import './Footer.scss';

export default function Footer(){
    return (
      <footer>
        <div className="footer-up">
          <div className="footer-up-block-1">
            <div className="footer-block-1-logo">
              <img
                className="img-logo"
                src={frame}
                alt="img-logo"
                height="36px"
                width="36px"
              />
              <h6 className="footer-logo-name">Buxonline</h6>
            </div>
            <a href="#" className="link-linkedin">
              <img
                className="logo-linkedin"
                src={linkedin}
                alt="logo-linkedin"
                height="10px"
                width="8px"
              />
            </a>
            <a href="#" className="link-telegram">
              <img
                className="logo-telegram"
                src={telegram}
                alt="logo-telegram"
                height="10px"
                width="8px"
              />
            </a>
            <a href="#" className="link-facebook">
              <img
                className="logo-facebook"
                src={facebook}
                alt="logo-facebook"
                height="10px"
                width="8px"
              />
            </a>
            <a href="#" className="link-instagram">
              <img
                className="logo-instagram"
                src={instagram}
                alt="logo-instagram"
                height="10px"
                width="8px"
              />
            </a>
            {/* <p className="footer-text-logo">@2024-Всі права захищені</p> */}
          </div>

          <div className="footer-up-block-2">
            <a href="#" className="desc">
              Про нас
            </a>
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

          <div className="footer-up-block-3">
            <a href="#" className="platform">
              Платформа
            </a>
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

          <div className="footer-up-block-4">
            <a href="#" className="law">
              Законодавство
            </a>
            <a href="#" className="footer-text">
              Правила використання
            </a>
            <a href="#" className="footer-text">
              Згода користувача
            </a>
          </div>

          <div className="footer-up-block-5">
            <p className="contacts">Контакти</p>
            <a href="#" className="contacts-email">
              info@bux.com
            </a>
            <a href="#" className="contacts-tel">
              +380 (98) 000 00 00
            </a>
          </div>
        </div>
        <div className="footer-down">
          <div className="footer-down-block-1">
            <p className="footer-text">@2024-Всі права захищені</p>
          </div>
          <div className="footer-down-block-2">
            <p className="footer-text">Зроблено в рамках проекту Topizdato</p>
          </div>
        </div>
      </footer>
    );
}