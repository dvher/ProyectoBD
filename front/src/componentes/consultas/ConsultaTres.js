import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { consultaTres } from "../../api/consultas";

export default function ConsultaTres() {
  //seteamos el estado inicial de los libros retornados
  const [consulta, setConsulta] = useState([]);
  //seteo de recarga de libros
  const [reloadConsulta, setReloadConsulta] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    consultaTres().then((response) => {
      setConsulta(response);
    });
    setReloadConsulta(false);
  }, [reloadConsulta]);

  console.log(consulta);

  const columns = [
    {
      text: "Trabajadores con más de 5 años de experiencia: ",
      dataField: "consultatres",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="consultatres"
      data={consulta}
      columns={columns}
      striped
      centered
      hover
      condensed
    />
  );
}