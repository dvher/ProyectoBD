//controlador de books que estan en la base de datos
const { parse } = require("path");
const { Pool } = require("pg");

//conexion a la base de datos
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "noxus",
  port: "5432",
});

//logica del controlador , peticiones get (retorno de valores)
const getEmpresas = async (req, res) => {
  const response = await pool.query("SELECT * FROM Empresa");
  res.status(200).json(response.rows);
};

const getEmpresaById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM Empresa Where ID_Empresa = $1", [id]);
  res.json(response.rows);
};

//logica del controlador , peticiones post (insercion de valores)
const createEmpresa = async (req, res) => {
  const { id_empresa, nombre_empresa, rut_empresa } = req.body;
  try{
    const response = await pool.query(
      "INSERT INTO Empresa (id_empresa, nombre_empresa, rut_empresa) VALUES ($1,$2, $3)",
      [id_empresa, nombre_empresa, rut_empresa]
    );
    res.json({
      message: "Empresa añadida con exito",
      body: {
        Empresa: { id_empresa, nombre_empresa, rut_empresa },
      },
    });
  }catch(error){

      res.json({
        message: "No se pudo añadir la empresa",
        body: {
          Empresa: { id_empresa, nombre_empresa, rut_empresa },
        },
      });
  }
};

/* para

generar la peticion post usar postman o similar https://www.postman.com*/
//logica del controlador , peticiones put (actualizacion de valores)
const updateEmpresa = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, rut } = req.body;
  const response = await pool.query(
    "UPDATE empresa SET  nombre_empresa = $1, rut_empresa = $2 WHERE id_empresa = $3",
    [nombre, rut, id]
  );

  res.json({ message: "Empresa actualizada" });
};

//logica del controlador , peticiones delete (eliminacion  de valores)
const deleteEmpresa = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("DELETE FROM Empresa where ID_Empresa = $1", [id]);
  res.json("Empresa eliminada");
};

//Tabla persona

//logica del controlador , peticiones get (retorno de valores)
const getPersonas = async (req, res) => {
  const response = await pool.query("SELECT * FROM Persona");
  res.status(200).json(response.rows);
};

const getPersonaById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM Persona Where ID_Persona = $1", [id]);
  res.json(response.rows);
};

//logica del controlador , peticiones post (insercion de valores)
const createPersona = async (req, res) => {
  const { id_persona, nombre, apellido, rut, tiene_deuda, deuda, sexo, arrendatario } = req.body;
  try{
    const response = await pool.query(
      "INSERT INTO Persona (id_persona, nombre, apellido, rut, tiene_deuda, deuda, sexo, arrendatario) VALUES ($1,$2, $3, $4, $5, $6, $7, $8)",
      [ id_persona, nombre, apellido, rut, tiene_deuda, deuda, sexo, arrendatario]
    );
    res.json({
      message: "Persona añadida con exito",
      body: {
        Persona: { id_persona, nombre, apellido, rut, tiene_deuda, deuda, sexo, arrendatario },
      },
    });
  }catch(error){
    
    res.json({
      message: "No se pudo añadir a la persona",
      body: {
        Persona: { id_persona, nombre, apellido, rut, tiene_deuda, deuda, sexo, arrendatario },
      },
    });
  }
};

/* para

generar la peticion post usar postman o similar https://www.postman.com*/
//logica del controlador , peticiones put (actualizacion de valores)
const updatePersona = async (req, res) => {
  const id = parseInt(req.params.id);
  const { id_empresa, nombre, apellido, rut,  tiene_deuda, deuda, sexo, arrendatario} = req.body;
  const response = await pool.query(
    "UPDATE Persona SET  nombre = $2, apellido = $3, rut = $4, tiene_deuda = $5, deuda = $6, sexo = $7, arrendatario = $8 WHERE id_persona = $1",
    [id, nombre, apellido, rut,  tiene_deuda, deuda, sexo, arrendatario]
  );
  try{
    res.json({ message: "Persona actualizada" });
  }catch(error){
    res.json({ message: "No se pudo actualizar"});
  }
};

//logica del controlador , peticiones delete (eliminacion  de valores)
const deletePersona = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("DELETE FROM Persona where ID_Persona = $1", [id]);
  try{
    res.json({ message: "Persona eliminada"});
  }catch(error){
    res.json({ message: "No se pudo eliminar"});
  }
};

//Tabla Arquitecto

//logica del controlador , peticiones get (retorno de valores)
const getArquitecto = async (req, res) => {
  const response = await pool.query("SELECT * FROM Arquitecto");
  res.status(200).json(response.rows);
};

const getArquitectoByCorreo = async (req, res) => {
  const correo = req.params.correo;
  const response = await pool.query("SELECT * FROM Arquitecto Where Correo_Empresa = $1", [correo]);
  res.json(response.rows);
};

//logica del controlador , peticiones post (insercion de valores)
const createArquitecto = async (req, res) => {
  const { correo_empresa, id_persona, id_empresa, obras_disenadas, ano_egreso} = req.body;
  try{
    const response = await pool.query(
      "INSERT INTO Arquitecto (correo_empresa, id_persona, id_empresa, obras_disenadas, ano_egreso) VALUES ($1,$2, $3,$4, $5)",
      [ correo_empresa, id_persona, id_empresa, obras_disenadas, ano_egreso]
    );
    res.json({
      message: "Arquitecto añadido con exito",
      body: {
        Arquitecto: { correo_empresa, id_persona, id_empresa, obras_disenadas, ano_egreso },
      },
    });
  }catch(error){
    console.log(error);    
  }
};

/* para generar la peticion post usar postman o similar https://www.postman.com*/
//logica del controlador , peticiones put (actualizacion de valores)
const updateArquitecto = async (req, res) => {
  const correo = req.params.correo;
  const { correo_empresa, id_persona, id_empresa, obras_disenadas, ano_egreso } = req.body;
  const response = await pool.query(
    "UPDATE Arquitecto SET id_persona = $1,id_empresa = $2, obras_disenadas = $3, ano_egreso = $4 WHERE  correo_empresa = $5",
    [nombre, rut, id]
  );

  res.json({ message: "Arquitecto actualizado" });
};

//logica del controlador , peticiones delete (eliminacion  de valores)
const deleteArquitecto = async (req, res) => {
  const correo = req.params.correo;
  const response = await pool.query("DELETE FROM Arquitecto where Correo_Empresa = $1", [correo]);
  res.json("Arquitecto eliminado");
};

//-------------------------------------------------Tabla Casa 

//logica del controlador , peticiones get (retorno de valores)
const getCasa = async (req, res) => {
  const response = await pool.query("SELECT * FROM Casa");
  res.status(200).json(response.rows);
};

const getCasaById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM Casa Where ID_Casa = $1", [id]);
  res.json(response.rows);
};

//logica del controlador , peticiones post (insercion de valores)
const createCasa = async (req, res) => {
  const {id_casa,  id_empresa, id_persona, tamano, segundo_piso, numero_de_piezas,precio_compra , precio_arriendo, direccion } = req.body;
  try{
    const response = await pool.query(
      "INSERT INTO Casa (ID_Casa, ID_Empresa, ID_Persona, Tamano, Segundo_Piso, Numero_de_Piezas,Precio_Compra , Precio_Arriendo, Direccion) VALUES ($1,$2, $3, $4, $5, $6,$7,$8, $9)",
      [ id_casa,id_empresa, id_persona, tamano, segundo_piso, numero_de_piezas,precio_compra , precio_arriendo, direccion ]
    );
    res.json({
      message: "Casa añadida con exito",
      body: {
        Casa: { id_casa, id_empresa, id_persona, tamano, segundo_piso, numero_de_piezas,precio_compra , precio_arriendo, direccion },
      },
    });
  }catch(error){
    console.log(error);    
  }
};

/* para

generar la peticion post usar postman o similar https://www.postman.com*/
//logica del controlador , peticiones put (actualizacion de valores)
const updateCasa = async (req, res) => {
  const id = parseInt(req.params.id);
  const {id_casa, id_empresa, id_persona, tamano, segundo_piso, numero_de_piezas,precio_compra , precio_arriendo, direccion } = req.body;
  const response = await pool.query(
    "UPDATE Casa SET  id_empresa = $1, id_persona= $2, tamano= $3, segundo_piso= $4, numero_de_piezas= $5 ,precio_compra = $6 , precio_arriendo= $7, direccion = $8 WHERE id_casa = $9",
    [id_empresa, id_persona, tamano, segundo_piso, numero_de_piezas,precio_compra , precio_arriendo, direccion, id_casa]
  );

  res.json({ message: "Casa actualizada" });
};

//logica del controlador , peticiones delete (eliminacion  de valores)
const deleteCasa = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("DELETE FROM Caa where ID_Casa = $1", [id]);
  res.json("Casa eliminada");
};



//Consultas

const consultaUno = async (req, res) => {
  const id = parseInt(req.body.id);
  const response = await pool.query("SELECT ConsultaUno($1)", [id]);
  res.json(response.rows);
};

const consultaDos = async (req, res) => {
  const id = parseInt(req.body.id);
  const response = await pool.query("SELECT ConsultaDos()");
  res.json(response.rows);
};

const consultaTres = async (req, res) => {
  const anho = new Date();
  const hoy = parseInt(anho.getFullYear());
  const response = await pool.query("SELECT ConsultaTres($1)", [hoy]);
  console.log(hoy);
  res.json(response.rows);
};

const consultaCuatro = async (req, res) => {
  const response = await pool.query("SELECT ConsultaCuatro()");
  res.json(response.rows);
};

const consultaCinco = async (req, res) => {
  const response = await pool.query("SELECT ConsultaCinco()");
  res.json(response.rows);
};

const consultaSeis = async (req, res) => {
  const calle = req.body.calle;
  const response = await pool.query("SELECT ConsultaSeis($1)", [calle]);
  res.json(response.rows);
};

const consultaSiete = async (req, res) => {
  const response = await pool.query("SELECT ConsultaSiete()");
  res.json(response.rows);
};

const consultaOcho = async (req, res) => {
  const id = parseInt(req.body.id);
  const response = await pool.query("SELECT ConsultaOcho($1)", [id]);
  res.json(response.rows);
};

const consultaNueve = async (req, res) => {
  const response = await pool.query("SELECT ConsultaNueve()");
  res.json(response.rows);
};

module.exports = {
  getEmpresas,
  getEmpresaById,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa,
  getPersonas,
  getPersonaById,
  createPersona,
  updatePersona,
  deletePersona,
  getArquitecto,
  getArquitectoByCorreo,
  createArquitecto,
  updateArquitecto,
  deleteArquitecto,
  getCasa,
  getCasaById,
  createCasa,
  updateCasa,
  deleteCasa,
  consultaUno,
  consultaDos,
  consultaTres,
  consultaCuatro,
  consultaCinco,
  consultaSeis,
  consultaSiete,
  consultaOcho,
  consultaNueve,
};

/*
 el manejo de async consiste en la ejecución asincrónica , donde se espera la ejecucion del los
 valores de la funcion (req,res) y luego tras terminar eso realizar la consulta
 https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona
 */
