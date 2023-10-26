import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <header>
        <p className="beta-advent">Beta.</p>
        <nav className="nav-destokp">
          <ul className="ul-destokp">
            <li>Inicio</li>
            <li>Sobre mi</li>
            <li>Habilidades</li>
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <nav className="nav-mobile">
          {isActive ? (
            <svg
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="cross-icon"
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
            </svg>
          ) : (
            <svg
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="hamburger-icon"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="512"
              height="512"
            >
              <path d="M0,3.5c0-.28,.22-.5,.5-.5H18.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5H.5c-.28,0-.5-.22-.5-.5Zm18.5,15.5H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H18.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Zm5-8H5.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5H23.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z" />
            </svg>
          )}
          <ul className={isActive ? "isActive" : ""}>
            <li>
              <a onClick={closeMenu} href="./#hero-section">
                Inicio
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="./#about-section">
                Sobre mi
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="./#tecnology-section">
                Habilidades
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="./#project-section">
                Proyectos
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="./#form-section">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
