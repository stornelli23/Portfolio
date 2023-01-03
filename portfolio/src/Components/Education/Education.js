import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main.css";

export default function Education() {
  return (
    <Container>
      <Row id="education">
        <Col className="col-12 d-flex justify-content-center">
          <h2 className="sectionsTitle">EDUCATION</h2>
        </Col>
        <Col>
          <Tabs>
            <TabList>
              <Tab>Completed</Tab>
              <Tab>In progress</Tab>
            </TabList>
            <Row>
              <Col>
              
              <TabPanel>
                <Row>
                  <Col className="col-12 col-lg-6">
                    <p className="fw-light">
                      - Full Stack Web Developer course at "Digital House".
                    </p>
                    <p className="fst-italic fw-light">
                      March 2022 - September 2022
                    </p>
                  </Col>
                  <Col className="col-12 col-lg-6">
                    <img
                      src="/img/festejo.png"
                      style={{ width: "200px" }}
                      alt="celebration"
                    />
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel>
                <Row>
                  <Col className="col-12 col-lg-6">
                    <p className="fw-light">
                      - Programming Technician at "Instituto TECLAB".
                    </p>
                    <p className="fst-italic fw-light">June 2021 - Present</p>
                  </Col>
                  <Col className="col-12 col-lg-6">
                    <img
                      src="/img/macbook.png"
                      style={{ width: "200px" }}
                      alt="celebration"
                    />
                  </Col>
                </Row>
              </TabPanel>
              </Col>
            </Row>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
