import Container from "react-bootstrap/esm/Container";
import "./AboutMe.css";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function AboutMe() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
        <Tabs className="Tabs">
          <TabList>
            <Tab>Who I am?</Tab>
            <Tab>Hard skills</Tab>
            <Tab>Soft skills</Tab>
          </TabList>
          <TabPanel>
            <Row>
            <Col className="col-12">
          <p className="aboutMe">
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
            </Row>
            
          </TabPanel>
          <TabPanel>
            <p>Tab 2 works!</p>
          </TabPanel>
          <TabPanel>
            <p>Tab 3 works!</p>
          </TabPanel>
        </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
