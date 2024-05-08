import React, { useState } from "react";
import "./Header.css";
import { LogoLinkedIn } from "../../assets/icons/LogoLinkedIn";
import { LogoInstagram } from "../../assets/icons/LogoInstagram";
import { LogoMmMobile } from "../../assets/icons/LogoMmMobile";

export const Header = () => {
  const [isMenuClicked, setisMenuClicked] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav-social">
        <img
          className="header__logo--destokp"
          src="images/logo_mm_desktop.webp"
          alt="imagen del logo"
        />
        <LogoMmMobile />
        <div
          onClick={() => setisMenuClicked(!isMenuClicked)}
          className={`menu ${isMenuClicked && "menu--open"}`}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
        <div
          className={`header__navs ${isMenuClicked && "header__navs--open"}`}
        >
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#hero-id">
                Inicio
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#about-id">
                Sobre nosotros
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#services-id">
                Servicios
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#contact-id">
                Contacto
              </a>
            </li>
          </ul>
          <ul className="header__social">
            <li className="header__social-item">
              <a className="header__social-link" href="">
                <LogoInstagram />
              </a>
            </li>
            <li className="header__social-item">
              <a className="header__social-link" href="">
                <LogoLinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
