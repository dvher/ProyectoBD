import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { updateEmpresa } from "../../api/empresa";
import { toast } from "react-toastify";

export default function UpdateEmpresa() {
  //variable  de estado para el manejo de error de servidor
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      nombre_empresa: Yup.string().required("el titulo es obligatorio"),
      id_empresa: Yup.string().required("El autor es obligatorio"),
      rut_empresa: Yup.string().required("La seccion es obligatoria"),
    }),
    onSubmit: async (empresaData) => {
      console.log("empresa:", empresaData);
      setError("");

      const result = await updateEmpresa(empresaData.id_empresa, empresaData);

      if (result.message) {
        alert(result.message);
        console.log(result);
      } else {
        setError(error.message);
        toast.error(error.message);
      }
    },
  });
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Ingresa el ID de la empresa a actualizar y sus nuevos datos.</h2>
      <Form.Control
        type="number"
        placeholder="Id de la empresa"
        name="id_empresa"
        value={formik.values.id_empresa}
        onChange={formik.handleChange}
        error={formik.errors.id_empresa && true}
      />
      <Form.Control
        type="text"
        placeholder="Nombre de la empresa"
        name="nombre_empresa"
        value={formik.values.nombre_empresa}
        onChange={formik.handleChange}
        error={formik.errors.nombre_empresa && true}
      />
      <Form.Control
        type="text"
        placeholder="Rut de la empresa"
        name="rut_empresa"
        value={formik.values.rut_empresa}
        onChange={formik.handleChange}
        error={formik.errors.rut_empresa && true}
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
    id_empresa: "",
    nombre_empresa: "",
    rut_empresa: "",
  };
}
;