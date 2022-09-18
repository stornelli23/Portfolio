import { useState } from "react";
import "./NavBar.css";
import {LanguageButton} from '../LanguageButton/languageButton'
import Container from "react-bootstrap/esm/Container";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Container>
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {isNavExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="black"
            className="w-6 h-6"
            style={{ background: "inherit" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ background: "inherit" }}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">INICIO</a>
          </li>
          <li>
            <a href="/">SOBRE MÍ</a>
          </li>
          <li>
            <a href="/">PROYECTOS</a>
          </li>
          <li>
            <a href="/">ESTUDIOS</a>
          </li>
        </ul>
      </div>
          <LanguageButton/>
    </nav>
    </Container>
  );
}
