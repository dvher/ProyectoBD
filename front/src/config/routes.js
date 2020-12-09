//sistema de rutas que el sitio tendrá
//componentes
import Home from "../componentes/Home";
import Error404 from "../componentes/Error404";

import Empresa from "../componentes/empresas/Empresa";
import AddEmpresa from "../componentes/empresas/AddEmpresas";
import UpdateEmpresa from "../componentes/empresas/UpdateEmpresa";

import Persona from "../componentes/personas/Persona";
import AddPersona from "../componentes/personas/AddPersona";

import ConsultaUno from "../componentes/consultas/ConsultaUno";
import ConsultaDos from "../componentes/consultas/ConsultaDos";
import ConsultaTres from "../componentes/consultas/ConsultaTres";
import ConsultaCuatro from "../componentes/consultas/ConsultaCuatro";
import ConsultaCinco from "../componentes/consultas/ConsultaCinco";
import ConsultaSeis from "../componentes/consultas/ConsultaSeis";
import ConsultaSiete from "../componentes/consultas/ConsultaSiete";
import ConsultaOcho from "../componentes/consultas/ConsultaOcho";
import ConsultaNueve from "../componentes/consultas/ConsultaNueve";

//layout
import Layout from "../Layout/Layout1";
const routes = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
   
      {
        path: "/empresa",
        component: Empresa,
        exact: true,
      },
      {
        path: "/newempresa",
        component: AddEmpresa,
        exact: true,
      },
      {
        path: "/upempresa/:id",
        component: UpdateEmpresa,
        exact: true,
      },
      {
        path: "/persona",
        component: Persona,
        exact: true,
      },
      {
        path: "/newpersona",
        component: AddPersona,
        exact: true,
      },
      {
        path: "/consulta1",
        component: ConsultaUno,
        exact: true,
      },
      {
        path: "/consulta2",
        component: ConsultaDos,
        exact: true,
      },
      {
        path: "/consulta3",
        component: ConsultaTres,
        exact: true,
      },
      {
        path: "/consulta4",
        component: ConsultaCuatro,
        exact: true,
      },
      {
        path: "/consulta5",
        component: ConsultaCinco,
        exact: true,
      },
      {
        path: "/consulta6",
        component: ConsultaSeis,
        exact: true,
      },
      {
        path: "/consulta7",
        component: ConsultaSiete,
        exact: true,
      },
      {
        path: "/consulta8",
        component: ConsultaOcho,
        exact: true,
      },
      {
        path: "/consulta9",
        component: ConsultaNueve,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
/* routes es un arreglo de objetos , donde cada objeto posee lo siguiente: 
path: (la ruta a la que se accede)
component: archivo .js que se mostrará 
exact: identificador que si la ruta es estricta o no
*/

/* esquema de componentes:
APP : componente base
 - Layout: Componente de grid (donde cargamos los demas componentes)
    - Libro: componente que tiene libros
*/