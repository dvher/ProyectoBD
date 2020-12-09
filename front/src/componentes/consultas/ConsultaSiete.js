import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { consultaSiete } from "../../api/consultas";

export default function ConsultaSiete() {
  //seteamos el estado inicial de los libros retornados
  const [consulta, setConsulta] = useState([]);
  //seteo de recarga de libros
  const [reloadConsulta, setReloadConsulta] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    consultaSiete().then((response) => {
      setConsulta(response);
    });
    setReloadConsulta(false);
  }, [reloadConsulta]);

  console.log(consulta);

  const columns = [
    {
      text: "La cantidad de casas con 2do piso, 7 piezas y que sea menor a 70 millones de pesos son",
      dataField: "consultasiete",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="consultasiete"
      data={consulta}
      columns={columns}
      pagination={paginationFactory({ sizePerPage: 5 })}
      striped
      hover
      condensed
    />
  );
}