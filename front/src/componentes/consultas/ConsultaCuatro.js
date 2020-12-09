import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { consultaCuatro } from "../../api/consultas";

export default function ConsultaCuatro() {
  //seteamos el estado inicial de los libros retornados
  const [consulta, setConsulta] = useState([]);
  //seteo de recarga de libros
  const [reloadConsulta, setReloadConsulta] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    consultaCuatro().then((response) => {
      setConsulta(response);
    });
    setReloadConsulta(false);
  }, [reloadConsulta]);

  console.log(consulta);

  const columns = [
    {
      text: "¿Hay un trabajador viviendo en una construcción de su empresa?: ",
      dataField: "consultacuatro",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="consultacuatro"
      data={consulta}
      columns={columns}
      pagination={paginationFactory({ sizePerPage: 5 })}
      striped
      hover
      condensed
    />
  );
}