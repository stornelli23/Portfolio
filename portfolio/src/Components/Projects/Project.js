import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main.css";

export default function Project(props) {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="col-12 d-flex justify-content-center align-items-center my-4">
          <h4 className="m-0 fw-lighter">{props.title}</h4>
        </Col>
        <Col>
          <Tabs className="Tabs">
            <TabList>
              <Tab>Resume</Tab>
              <Tab>More information</Tab>
            </TabList>
            <TabPanel>
              <Row>
                <Col>
                  <p>{props.resume}</p>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row>
                <Col>
                  <p>{props.info}</p>
                </Col>
              </Row>
            </TabPanel>
            <Col className="col-12">
              <img
                className="imgProject"
                src={props.image}
                alt="Project preview"
              />
            </Col>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
