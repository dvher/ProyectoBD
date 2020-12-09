import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* BrowserRouter as Router es la función que nos permitirá crear nuestro sistema de rutas
 Route : componente que utilizaremos para crear la ruta especifica, en nuestro caso le enviaremos
 el arreglo routes
  Switch : componente que permite refrescar el navegador cuando cambiamos de ruta*/
import routes from "./config/routes";

function App() {
  console.log(routes); //aca puedo escribir js puro
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
function RouteWithSubRoutes(route) {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}
export default App;
//componente principal de nuestra aplicación , como veran es una función