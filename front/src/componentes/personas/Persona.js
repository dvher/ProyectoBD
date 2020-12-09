import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { getPersona } from "../../api/persona";

export default function Persona() {
  //seteamos el estado inicial de los libros retornados
  const [persona, setPersona] = useState([]);
  //seteo de recarga de libros
  const [reloadPersona, setReloadPersona] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    getPersona().then((response) => {
      setPersona(response);
    });
    setReloadPersona(false);
  }, [reloadPersona]);

  console.log(persona);

  const columns = [
    {
      dataField: "id_persona",
      text: "Persona ID",
      sort: true,
    },
    {
      dataField: "nombre",
      text: "Nombre",
    },
    {
      dataField: "apellido",
      text: "Apellido",
    },
    {
      dataField: "rut",
      text: "Rut",
    },
    {
      dataField: "tiene_deuda",
      text: "Tiene deuda",
    },
    {
      dataField: "deuda",
      text: "deuda",
    },
    {
      dataField: "sexo",
      text: "sexo",
    },
    {
      dataField: "arrendatario",
      text: "arrendatario",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="id_persona"
      data={persona}
      columns={columns}
      pagination={paginationFactory({ sizePerPage: 5 })}
      striped
      hover
      condensed

    />
  );
}