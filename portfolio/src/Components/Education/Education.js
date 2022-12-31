import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main.css";

export default function Education() {
  return (
    <Container>
      <Row>
      <Col className="col-12 d-flex justify-content-center">
        <h2 className="sectionsTitle">EDUCATION</h2>
        </Col>
        <Col>
          <Tabs>
            <TabList>
              <Tab>Completed</Tab>
              <Tab>In progress</Tab>
            </TabList>
            <TabPanel>
              <Row>
                <Col>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row>
                <Col>
                </Col>
              </Row>
            </TabPanel>
            <Col className="col-12">
              
            </Col>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
