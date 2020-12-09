import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { createEmpresa } from "../../api/empresa";
import { toast } from "react-toastify";

export default function AddEmpresa() {
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

      const result = await createEmpresa(empresaData);

      if (result.message) {
        toast.success("empresa creada");
        alert(result.message + ": \nID: " + empresaData.id_empresa + "\nNombre: " + empresaData.nombre_empresa + "\nRUT: " + empresaData.rut_empresa);
      } else {
        setError(error.message);
        alert("No se pudo añadir empresa.");
      }
    },
  });
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>ingresa una nueva empresa.</h2>
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