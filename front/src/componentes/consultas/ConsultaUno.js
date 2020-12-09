import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { consultaUno } from "../../api/consultas";

export default function ConsultaUno() {
  //variable  de estado para el manejo de error de servidor
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      id: Yup.string().required("El ID es obligatorio"),
    }),
    onSubmit: async (id) => {
      setError("");
      const result = await consultaUno(id);
      console.log(result);
      if(result[0].consultauno != null)alert("La deuda total en la casa " + id.id + " es de " + result[0].consultauno);
      else alert("No se encontraron casas con id " + id.id);
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Ingresa el ID de la casa a consultar.</h2>
      <Form.Control
        type="number"
        placeholder="ID Casa"
        name="id"
        value={formik.values.id}
        onChange={formik.handleChange}
        error={formik.errors.id && true}
      />
      <Button type="submit" className="btn-submit">
        Confirmar
      </Button>
      {error && <p className="submit-error">{error}</p>}
    </Form>
  );
}

function initialValues() {
  return {
    id: "",
  };
}
;