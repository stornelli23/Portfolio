import Container from "react-bootstrap/esm/Container";
import "../Main.css";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function AboutMe() {
  return (
    <Container className="d-flex flex-column justify-content-between ">
      <Row id="aboutme" className="d-flex justify-content-center ">
        <Col className="col-12 d-flex justify-content-center">
          <h2 className="sectionsTitle">ABOUT ME</h2>
        </Col>
        <Col>
          <Tabs className="Tabs">
            <TabList>
              <Tab>Who I am?</Tab>
              <Tab>Skills</Tab>
            </TabList>
            <TabPanel>
              <Row>
                <Col className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <p className="aboutMe">
                    Tengo 23 años, me encuentro en los inicios de mi carrera
                    profesional y actualmente estoy en busqueda de un nuevo
                    empleo en el cual pueda aplicar todos mis conocimientos y
                    potenciarlos. Sigo formandome dia a dia para dar siempre mi
                    mejor version. Me destaca mi constancia, responsabilidad,
                    adaptabilidad y sobre todo la pasión por el desarrollo.
                  </p>
                </Col>
                <Col className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <img
                    className="imgPerfil"
                    style={{ width: "180px", borderRadius: "10px" }}
                    src="/img/SantiagoStornelli-Perfil.png"
                    alt="Foto de perfil"
                  />
                   <a
                    href="https://drive.google.com/file/d/1PKLk8px8hM3SmYpTo8HpBCW1OGWZ2Vet/view?usp=share_link"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    className="downloadCV p-1"
                  >
                    Check my CV
                  </a>
                </Col>
                <Col className="col-12 col-md-6 ">
                 
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row style={{gridRowGap: "100px"}}>
                <Col className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-center">
                  <h6 className="text-decoration-underline mb-4">
                    Front-End
                  </h6>
                  <ul className="skillsList p-0">
                    <li>- HTML5</li>
                    <li>- CSS</li>
                    <li>- Javascript</li>
                    <li>- Bootstrap</li>
                    <li>- Material UI</li>
                    <li>- React JS</li>
                  </ul>
                  <img
                    src="/img/web-design.png"
                    style={{ width: "50px" }}
                    alt="teamwork"
                  />
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-center">
                  <h6 className="text-decoration-underline mb-4">
                    Back-End
                  </h6>
                  <ul className="skillsList p-0">
                    <li>- Node JS</li>
                    <li>- Express JS</li>
                    <li>- My SQL</li>
                  </ul>
                  <img
                    src="/img/back-end.png"
                    style={{ width: "50px" }}
                    alt="teamwork"
                  />
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-center">
                  <h6 className="text-decoration-underline mb-4">
                    Others tools
                  </h6>
                  <ul className="skillsList p-0">
                    <li>- Postman</li>
                    <li>- Sequelize</li>
                    <li>- Git</li>
                  </ul>
                  <img
                    src="/img/ajuste.png"
                    style={{ width: "50px", height: "50px" }}
                    alt="teamwork"
                  />
                </Col>
                <Col className="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-between align-items-center">
                  <h6 className="text-decoration-underline mb-4">
                    Soft skills
                  </h6>
                  <ul className="skillsList p-0">
                    <li>- Empathy</li>
                    <li>- Patience</li>
                    <li>- Teamwork</li>
                    <li>- Responsibility</li>
                    <li>- Adaptability</li>
                    <li>- Communication</li>
                    <li>- Compromise</li>
                  </ul>
                  <img
                    src="/img/support.png"
                    style={{ width: "50px" }}
                    alt="teamwork"
                  />
                </Col>
              </Row>
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
