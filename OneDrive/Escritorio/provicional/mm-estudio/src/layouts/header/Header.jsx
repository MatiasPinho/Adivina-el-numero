import React, { useState, useEffect } from "react";
import "./Header.css";
import { LogoLinkedIn } from "../../assets/icons/LogoLinkedIn";
import { LogoInstagram } from "../../assets/icons/LogoInstagram";
import { LogoMmMobile } from "../../assets/icons/LogoMmMobile";
import { LogoFacebook } from "../../assets/icons/LogoFacebook";

export const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [navLinks, setNavLinks] = useState({
    home: true,
    about: false,
    services: false,
    contact: false,
    transparent: false,
  });

  const body = document.body;

  isMenuClicked
    ? (body.style.overflow = "hidden")
    : (body.style.overflow = "auto");

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateNavLinks = () => {
      if (isScroll < 900) {
        setNavLinks({
          home: true,
          about: false,
          services: false,
          contact: false,
        });
      } else if (isScroll >= 900 && isScroll < 1788) {
        setNavLinks({
          home: false,
          about: true,
          services: false,
          contact: false,
          transparent: true,
        });
      } else if (isScroll >= 1788 && isScroll <= 3346) {
        setNavLinks({
          home: false,
          about: false,
          services: true,
          contact: false,
          transparent: true,
        });
      } else if (isScroll >= 3346) {
        setNavLinks({
          home: false,
          about: false,
          services: false,
          contact: true,
          transparent: true,
        });
      }
    };

    updateNavLinks();
  }, [isScroll]);

  return (
    <header className="header">
      <nav className="header__nav-social">
        <img
          className={`header__logo--destokp ${navLinks.transparent && "header__logo--destokp--disable"}`}
          src="images/logo_mm_desktop.webp"
          alt="imagen del logo"
        />
        <LogoMmMobile />
        <div
          onClick={() => setIsMenuClicked(!isMenuClicked)}
          className={`menu ${isMenuClicked && "menu--open"}`}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
        <div
          className={`header__navs ${isMenuClicked && "header__navs--open"} ${navLinks.transparent && "header__navs--transparent"}`}
        >
          <ul className="header__nav">
            <li className="header__nav-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className={`header__nav-link ${
                  navLinks.home && "header__nav-link--active"
                }`}
                href="#hero-id"
              >
                Inicio
              </a>
            </li>
            <li className="header__nav-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className={`header__nav-link ${
                  navLinks.about && "header__nav-link--active"
                }`}
                href="#about-id"
              >
                Sobre nosotros
              </a>
            </li>
            <li className="header__nav-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className={`header__nav-link ${
                  navLinks.services && "header__nav-link--active"
                }`}
                href="#services-id"
              >
                Servicios
              </a>
            </li>
            <li className="header__nav-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className={`header__nav-link ${
                  navLinks.contact && "header__nav-link--active"
                }`}
                href="#contact-id"
              >
                Contacto
              </a>
            </li>
          </ul>
          <ul className="header__social">
            <li className="header__social-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className="header__social-link"
                href=""
              >
                <LogoInstagram />
              </a>
            </li>
            <li className="header__social-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className="header__social-link"
                href=""
              >
                <LogoLinkedIn />
              </a>
            </li>
            <li className="header__social-item">
              <a
                onClick={() => {
                  setIsMenuClicked(false);
                }}
                className="header__social-link"
                href=""
              >
                <LogoFacebook />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
