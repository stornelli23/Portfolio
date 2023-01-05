import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main.css";
import MultiLingualContent from "../multilingualContent";


export default function Education() {
  return (
    <Container>
      <Row id="education">
        <Col className="col-12 d-flex justify-content-center">
          <h2 className="sectionsTitle"><MultiLingualContent contentID="educationSection"/></h2>
        </Col>
        <Col>
          <Tabs>
            <TabList>
              <Tab><MultiLingualContent contentID="firstTabEducation"/></Tab>
              <Tab><MultiLingualContent contentID="secondTabEducation"/></Tab>
            </TabList>
            <Row>
              <Col>
              
              <TabPanel>
                <Row>
                  <Col className="col-12 col-lg-6">
                    <p className="fw-light">
                    <MultiLingualContent contentID="firstCompleted"/>
                    </p>
                    <p className="fst-italic fw-light">
                    <MultiLingualContent contentID="firstDateCompleted"/>
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
                    <MultiLingualContent contentID="firstInProgress"/>
                    </p>
                    <p className="fst-italic fw-light">
                    <MultiLingualContent contentID="firstDateInProgress"/>
                    </p>
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
