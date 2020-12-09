import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { getEmpresa } from "../../api/empresa";

export default function Empresa() {
  //seteamos el estado inicial de los libros retornados
  const [empresa, setEmpresa] = useState([]);
  //seteo de recarga de libros
  const [reloadEmpresa, setReloadEmpresa] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    getEmpresa().then((response) => {
      setEmpresa(response);
    });
    setReloadEmpresa(false);
  }, [reloadEmpresa]);

  console.log(Empresa);

  const columns = [
    {
      dataField: "id_empresa",
      text: "Empresa ID",
      sort: true,
    },
    {
      dataField: "nombre_empresa",
      text: "Nombre",
    },
    {
      dataField: "rut_empresa",
      text: "Rut",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="id_empresa"
      data={empresa}
      columns={columns}
      pagination={paginationFactory({ sizePerPage: 5 })}
      striped
      hover
      condensed
    />
  );
}