import { useState } from "react";
import "./NavBar.css";
import { LanguageButton } from "../LanguageButton/languageButton";
import Container from "react-bootstrap/esm/Container";
import MultilingualContent from "../multilingualContent";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Container className="sticky-top">
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
              <a
                href="#top"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                
                <MultilingualContent contentID="homeNavbar" />
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                <MultilingualContent contentID="aboutMeNavbar" />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                
                <MultilingualContent contentID="projectsNavbar" />
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                
                <MultilingualContent contentID="educationNavbar" />
              </a>
            </li>
          </ul>
        </div>
        <LanguageButton />
      </nav>
    </Container>
  );
}
