import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Project.css";

export default function Project(props) {
  return (
    <Container>
      <Row>
        <Col>Preview</Col>
        <Col>
          <Tabs>
            <TabList>
              <Tab>Resume</Tab>
              <Tab>Info</Tab>
            </TabList>
          </Tabs>
          <TabPanel>
<p>HOLAAAAAAAA</p>
          </TabPanel>
          <TabPanel>
            <Row>
              <Col>
                <p>{props.info}</p>
              </Col>
            </Row>
          </TabPanel>
        </Col>
      </Row>
    </Container>
  );
}
