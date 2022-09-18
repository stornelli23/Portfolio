import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MultiLingualContent from "../multilingualContent";
import "./Home.css";

function Main() {
  return (
    <>
      <Container className="mainContainer">
        <Row className="d-flex flex-column align-items-center my-auto">
          <Col>
            <h2 className="presentacion my-2">
              <MultiLingualContent contentID="mainSubtitle" />
            </h2>
          </Col>
          <Col>
            <h1 className="presentacionTitulo my-2">
              <MultiLingualContent contentID="mainTitle" />
            </h1>
          </Col>
          <Col>
            <p className="presentacionFrase mt-2 m-0">
            <MultiLingualContent contentID="mainPhrase" />
            </p>
          </Col>
        </Row>
        
        <Row className="d-flex justify-content-center align-items-center contactameContainer">
          <Col className="col-6">
            <p className="m-0 p-1 contactame">
              <MultiLingualContent contentID="contactMe"/>
            </p>
          </Col>
          <Col className="col-2 d-flex justify-content-center align-items-center p-0">
          <a className="linksContact" href="https://www.linkedin.com/in/santiago-stornelli/" target={'_blank'} rel="noopener noreferrer"><i className="bx bxl-linkedin-square bx-md"></i></a>
          </Col>
          <Col className="col-2 d-flex justify-content-center align-items-center p-0">
           <a className="linksContact" href="mailto:santystornelli@hotmail.com"><i className="bx bx-envelope bx-md"></i></a>
          </Col>
        </Row>
        <Row className="footerRow">
          <Col className="col-9 p-0 colImgSaludando">
          <img className="imgSaludando" src="/img/saludo.png" alt="saludo" />
          </Col>
          <Col className="col-2 p-0 mt-auto colScrollDown">
          <i className='bx bx-chevron-down bx-md bx-fade-up' ></i>          
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Main;
