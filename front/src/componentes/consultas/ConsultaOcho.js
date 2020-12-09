import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { consultaOcho } from "../../api/consultas";

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
      const result = await consultaOcho(id);
      console.log(result);
      if(result.length > 0){
          
            let s = "Los trabajadores de la empresa de id: " + id.id + " trabajaron en las casas ubicadas en:";

            for(let i = 0; i < result.length; i++){

                s += "\n" + result[i].consultaocho;
                i++;

            }

            alert(s);

      }
      else alert("No se encontró la empresa de id " + id.id);
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Ingresa el ID de la empresa a consultar.</h2>
      <Form.Control
        type="number"
        placeholder="ID Empresa"
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