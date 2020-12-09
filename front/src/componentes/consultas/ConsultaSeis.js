import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { consultaSeis } from "../../api/consultas";

export default function ConsultaSeis() {
  //variable  de estado para el manejo de error de servidor
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      id: Yup.string().required("La calle es obligatoria"),
    }),
    onSubmit: async (id) => {
      setError("");
      const result = await consultaSeis(id);
      console.log(result);
      if(result[0].consultaseis != null)alert("En la calle " + id.id + " hay  " + result[0].consultaseis + " casas  ");
      else alert("No se encontró una calle con el nombre " + id.id);
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Ingresa el ID de la casa a consultar.</h2>
      <Form.Control
        type="text"
        placeholder="Nombre de la calle"
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