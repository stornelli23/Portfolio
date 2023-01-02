import Container from "react-bootstrap/esm/Container";
import "../Main.css";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function AboutMe() {
  return (
    <Container className="d-flex flex-column justify-content-between ">
      <Row className="d-flex justify-content-center ">
        <Col className="col-12 d-flex justify-content-center">
        <h2 className="sectionsTitle">ABOUT ME</h2>
        </Col>
        <Col>
          <Tabs className="Tabs">
            <TabList>
              <Tab>Who I am?</Tab>
              <Tab>Skills</Tab>
              <Tab>Soft skills</Tab>
            </TabList>
            <TabPanel>
              <Row>
                <Col className="col-12">
                  <p className="aboutMe">
                    Tengo 23 años, me encuentro en los inicios de mi carrera
                    profesional y actualmente estoy en busqueda de un nuevo
                    empleo en el cual pueda aplicar todos mis conocimientos y
                    potenciarlos. Sigo formandome dia a dia para dar siempre mi
                    mejor version. Me destaca mi constancia, responsabilidad,
                    adaptabilidad y sobre todo la pasión por el desarrollo.
                  </p>
                </Col>
                <Col className="col-12">
                  <img
                    className="imgPerfil"
                    style={{ width: "200px", borderRadius:"10px" }}
                    src="/img/SantiagoStornelli-Perfil.png"
                    alt="Foto de perfil"
                  />
                </Col>
                <Col className="col-12 d-flex justify-content-center align-items-center">
                  <button className="downloadCV p-1">Download my CV</button>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <ul className="skillsList">
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>React JS</li>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>My SQL</li>
                <li>Sequelize</li>
                <li>Postman</li>
                <li>GIT</li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="softList">
                <li>Empathy</li>
                <li>Patience</li>
                <li>Teamwork</li>
                <li>Responsibility</li>
                <li>Adaptability</li>
                <li>Communication</li>
                <li>Compromise</li>
              </ul>
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
