import Container from "react-bootstrap/esm/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./AboutMe.css";
import { Col, Row } from "react-bootstrap";
import SoftSkills from "./SoftSkills";
import { useState } from "react";

export default function AboutMe() {
  const [key, setKey] = useState("aboutme");

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="aboutme" title="Who I am?">
            <Col className="col-12 my-4">
              <p className="aboutText">
                Tengo 23 años, me encuentro en los inicios de mi carrera
                profesional y actualmente estoy en busqueda de un nuevo empleo
                en el cual pueda aplicar todos mis conocimientos y potenciarlos.
                Sigo formandome dia a dia para dar siempre mi mejor version. Me
                destaca mi constancia, responsabilidad, adaptabilidad y sobre
                todo la pasión por el desarrollo.
              </p>
            </Col>
            <Col className="col-12">
              <img
                className="imgPerfil"
                style={{ width: "200px" }}
                src="/img/SantiagoStornelli-Perfil.png"
                alt="Foto de perfil"
              />
            </Col>
            <Col>
              <p className="downloadCV">Download my CV</p>
            </Col>
          </Tab>
          <Tab eventKey="profile" title="Hard skills">
            <SoftSkills></SoftSkills>
          </Tab>
          <Tab eventKey="contact" title="Soft skills"></Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
