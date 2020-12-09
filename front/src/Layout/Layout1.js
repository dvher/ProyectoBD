import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import NavBar from "../componentes/NavBar";

function Layout(props) {
  const { routes } = props;
  console.log(props);

  return (
    <Container fluid>
      <Row>
        <NavBar />
      </Row>
      <br />
      <LoadRoutes routes={routes} />
    </Container>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
export default Layout;

/* componente layout: 
este componente renderiza todo el sistema de rutas que creamos anteriormente, este sistema se envia a
traves de propiedades (props), se obitiene el sistema de rutas y luego con la funciones loadRoutes se realiza la carga
LoadRoutes:  funcion que crea la ruta con el componente, path, y si la ruta es exacta (se recorre todo el array routes para obtener los datos)
*/