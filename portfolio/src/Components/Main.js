import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Projects/Project";
import Education from "./Education/Education";
import { Row, Col } from "react-bootstrap";
import MultiLingualContent from "./multilingualContent";

function Main() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Row id="projects" className="m-0 p-0">
        <Col className="col-12 d-flex justify-content-center p-0 m-0">
          <h2 className="sectionsTitle"><MultiLingualContent contentID="projectsSection"/></h2>
        </Col>
      </Row>
      <Project
        title={<MultiLingualContent contentID="firstProjectTitle" />}
        resume={<MultiLingualContent contentID="firstProjectResume" />}
        info={<MultiLingualContent contentID="firstProjectInfo" />}
        gitHub={<MultiLingualContent contentID="firstGitHub" />}
        image="/img/Sneakers-Preview.png"
      />
      <Project
        title={<MultiLingualContent contentID="secondProjectTitle" />}
        resume={<MultiLingualContent contentID="secondProjectResume" />}
        info={<MultiLingualContent contentID="secondProjectInfo" />}
        gitHub={<MultiLingualContent contentID="secondGitHub" />}
        image="/img/Sneakers-Dashboard-Preview.png"
      />
      <Education />
    </>
  );
}
export default Main;
