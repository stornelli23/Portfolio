import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main.css";

export default function Project( props ) {
  return (
    <Container>
      <Row>
        <Col>
          <Tabs>
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
                src={props.image}
                alt="Project preview"
                style={{ width: "200px" }}
              />
            </Col>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
