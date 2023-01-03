import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Project from "./Projects/Project";
import Education from "./Education/Education";
import { Row, Col } from "react-bootstrap";

function Main() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Row id="projects" className="m-0 p-0">
        <Col className="col-12 d-flex justify-content-center p-0 m-0">
          <h2 className="sectionsTitle">PROJECTS</h2>
        </Col>
      </Row>
      <Project
        title='"Sneakers"'
        resume="E-Commerce de zapatillas en el cual el usuario tiene la capacidad de ver todos los productos, el detalle de los
        mismos, registrarse, loguearse y armar su carrito de compras."
        gitHub="proyect.github"
        info="Junto con mis compañeros de equipo desarrollamos un E-Commerce utilizando HTML para maquetar el sitio,
        CSS para darle nuestro estilo y Javascript para manejar las interacciones del usuario y la validación de
        formularios desde el Front-End.
        Para el desarrollo Back-End utilizamos Node.js con Express.js como framework de apoyo e implementamos
        una arquitectura MVC, creamos nuestra base de datos en MySQL y nos comunicamos con ella mediante el uso de Sequelize.
        Todo el proyecto fue desarrollado siguiendo los lineamientos de Metodologías Ágiles (SCRUM) y se gestionó utilizando 
        Git para el control de versiones. Tambien utilizamos Trello como herramienta para un trabajo más organizado y colaborativo."
        image="/img/Sneakers-Preview.png"
      />
      <Project
        title='"Sneakers" Dashboard'
        resume="Junto con mis compañeros de desarrollo realizamos un dashboard de la pagina web Sneakers, en el cual podemos ver
        datos especificos sobre nuestro E-Commerce, tales como el ultimo usuario registrado, el ultimo producto agregado, el total de
        marcas, de usuarios y de productos."
        gitHub="proyect.github"
        info="Este proyecto fue desarrollado mediante el uso de React.js y Bootstrap como framework, y atraves del consumo 
        de APIs previamente creadas con el objetivo de mostrar mas sofisticadamente los datos mas relevantes de nuestro sitio"
        image="/img/Sneakers-Dashboard-Preview.png"
      />
      <Education />
    </>
  );
}
export default Main;
