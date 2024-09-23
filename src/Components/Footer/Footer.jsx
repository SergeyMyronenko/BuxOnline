import React from "react";
import { IconContext } from "react-icons";
import { SlSocialLinkedin } from "react-icons/sl";
import { LiaTelegramPlane } from "react-icons/lia";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

import './Footer.scss';

/**
 * Footer component renders the footer section of the application.
 * It includes multiple sections such as company information, platform details,
 * legal information, and contact details. It also provides social media links.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-wrapper-up">

          <div className="footer-sidebar-wrapper-1">
            <div className="footer-sidebar-1-logo">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0408 0.795898C8.98701 0.795898 0.837 8.94591 0.837 18.9997C0.837 29.0536 8.98701 37.2036 19.0408 37.2036C29.0947 37.2036 37.2447 29.0536 37.2447 18.9997C37.2447 8.94591 29.0947 0.795898 19.0408 0.795898ZM20.6127 28.8694V31.4333H18.1603V28.8983C14.136 28.3472 12.3738 25.0406 12.3738 25.0406L14.8788 22.9451C14.8788 22.9451 16.4782 25.7294 19.3715 25.7294C20.9697 25.7294 22.1821 24.8739 22.1821 23.4123C22.1821 19.9955 12.9762 20.41 12.9762 14.0711C12.9762 11.3156 15.1556 9.33044 18.1591 8.86074V6.29939H20.6115V8.86074C22.7056 9.13629 25.1856 10.2385 25.1856 12.6095V14.4281H21.9341V13.5463C21.9341 12.637 20.7755 12.0308 19.4792 12.0308C17.8259 12.0308 16.6148 12.8575 16.6148 14.0148C16.6148 17.5143 25.8206 16.6601 25.8206 23.3021C25.8206 26.0325 23.7815 28.3997 20.6127 28.8694Z" fill="white" />
              </svg>
              <h2 className="footer-logo-name">Buxonline</h2>
            </div>
            <div className="social-media">
              <a href="#" className="link-linkedin">
                <IconContext.Provider value={{ color: "white", className: "contact-icon" }}>
                  <SlSocialLinkedin />
                </IconContext.Provider>
              </a>
              <a href="#" className="link-telegram">
                <IconContext.Provider value={{ color: "white", className: "contact-icon" }}>

                  <LiaTelegramPlane />
                </IconContext.Provider>
              </a>
              <a href="#" className="link-facebook">
                <IconContext.Provider value={{ color: "white", className: "contact-icon" }}>

                  <FiFacebook />
                </IconContext.Provider>
              </a>
              <a href="#" className="link-instagram">
                <IconContext.Provider value={{ color: "white", className: "contact-icon" }}>

                  <FaInstagram />
                </IconContext.Provider>
              </a>
            </div>

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