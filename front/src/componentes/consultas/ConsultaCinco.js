import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { consultaCinco } from "../../api/consultas";

export default function ConsultaCinco() {
  //seteamos el estado inicial de los libros retornados
  const [consulta, setConsulta] = useState([]);
  //seteo de recarga de libros
  const [reloadConsulta, setReloadConsulta] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    consultaCinco().then((response) => {
      setConsulta(response);
    });
    setReloadConsulta(false);
  }, [reloadConsulta]);

  console.log(consulta);

  const columns = [
    {
      text: "El precio de la ciudad es de ",
      dataField: "consultacinco",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="consultacinco"
      data={consulta}
      columns={columns}
      pagination={paginationFactory({ sizePerPage: 5 })}
      striped
      hover
      condensed
    />
  );
}