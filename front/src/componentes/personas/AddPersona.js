import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { createPersona } from "../../api/persona";
import { toast } from "react-toastify";

export default function AddPersona() {
  //variable  de estado para el manejo de error de servidor
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio."),
      id_persona: Yup.string().required("El ID es obligatorio."),
      rut: Yup.string().required("El RUT es obligatorio."),
      apellido: Yup.string().required("El apellido es obligatorio."),
      //tiene_deuda: Yup.string().required("Es obligatorio declarar la deuda."),
      deuda: Yup.string().required("Es necesario poner el valor de la deuda."),
      sexo: Yup.string().required("El sexo de la persona es obligatorio."),
      //arrentadario: Yup.string().required("Es necesario saber si la persona es arrentadario."),
    }),
    onSubmit: async (personaData) => {
      console.log("persona:", personaData);
      setError("");

      const result = await createPersona(personaData);

      if (result.message) {
        alert(result.message + ":\n" + "ID: " + personaData.id_persona + "\nNombre: " + personaData.nombre + "\nApellido: " + personaData.apellido + "\nRUT: " + personaData.rut);
      } else {
        setError(error.message);
        toast.error(error.message);
      }
    },
  });
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Ingresa una nueva persona.</h2>
      <Form.Control
        type="number"
        placeholder="Id de la persona"
        name="id_persona"
        value={formik.values.id_persona}
        onChange={formik.handleChange}
        error={formik.errors.id_persona && true}
      />
      <Form.Control
        type="text"
        placeholder="Nombre de la persona"
        name="nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre && true}
      />
      <Form.Control
        type="text"
        placeholder="Apellido de la persona"
        name="apellido"
        value={formik.values.apellido}
        onChange={formik.handleChange}
        error={formik.errors.apellido && true}
      />
      <Form.Control
        type="text"
        placeholder="Rut de la persona"
        name="rut"
        value={formik.values.rut}
        onChange={formik.handleChange}
        error={formik.errors.rut && true}
      />
      <Form.Control
        type="number"
        placeholder="¿La persona tiene deudas?"
        name="tiene_deuda"
        min="0"
        max="1"
        value={formik.values.tiene_deuda}
        onChange={formik.handleChange}
        error={formik.errors.tiene_deuda && true}
      />
      <Form.Control
        type="number"
        placeholder="Deuda de la persona"
        name="deuda"
        value={formik.values.deuda}
        onChange={formik.handleChange}
        error={formik.errors.deuda && true}
      />
      <Form.Control
        type="text"
        placeholder="Sexo de la persona"
        name="sexo"
        value={formik.values.sexo}
        onChange={formik.handleChange}
        error={formik.errors.sexo && true}
      />
      <Form.Control
        type="number"
        placeholder="¿La persona es arrendataria?"
        name="arrendatario"
        min="0"
        max="1"
        value={formik.values.arrentadario}
        onChange={formik.handleChange}
        error={formik.errors.arrentadario && true}
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
    id_persona: "",
    nombre: "",
    apellido: "",
    rut: "",
    tiene_deuda: "",
    deuda: "",
    sexo: "",
    arrendatario: "",
  };
}
;