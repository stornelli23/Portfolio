import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Main.css";
import MultiLingualContent from "../multilingualContent";


export default function Project(props) {
  return (
    <Container>
      <Row className="mb-5">
        <Col className="col-12 d-flex justify-content-center align-items-center my-4">
          <h4 className="m-0 fst-italic">{props.title}</h4>
        </Col>
        <Col>
          <Tabs className="Tabs">
            <TabList>
              <Tab><MultiLingualContent contentID="firstProjectsTab"/></Tab>
              <Tab><MultiLingualContent contentID="secondProjectsTab"/></Tab>
            </TabList>
            <Row  className="my-5">
              <Col>
                <TabPanel>
                  <Col className="col-12">
                    <p>{props.resume}</p>
                  </Col>
                </TabPanel>
                <TabPanel>
                  <Col>
                    <p>{props.info}</p>
                  </Col>
                </TabPanel>
              </Col>
              <Col className="col-12 col-md-6 my-auto d-flex flex-column justify-content-center align-items-center">
                <img
                  className="imgProject mb-3"
                  src={props.image}

                  alt="Project preview"
                />
                <p>{props.gitHub}</p>
              </Col>
            </Row>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
