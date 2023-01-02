import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Projects/Project";
import Education from "./Education/Education";
import { Row, Col } from "react-bootstrap";

function Main() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Row className="m-0 p-0">
      <Col className="col-12 d-flex justify-content-center p-0 m-0">
        <h2 className="sectionsTitle">PROJECTS</h2>
        </Col>
      </Row>
      <Project
        title="Sneakers"
        resume="This is my resume"
        info="Information"
        image="/img/Sneakers-Preview.png"
      />
      <Project
      title="Sneakers Dashboard"
        resume="This is my 2nd resume"
        info="Information 2"
        image="/img/Sneakers-Dashboard-Preview.png"
      />
      <Education />
    </>
  );
}
export default Main;
