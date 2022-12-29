import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Projects/Project";

function Main() {
    return (
      <>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Project/>
        <Project/>

      </>
    );
  }
  export default Main;
  