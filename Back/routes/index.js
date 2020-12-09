const { Router } = require("express");
const router = Router();

const {
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
  consultaUno,
  consultaDos,
  consultaTres,
  consultaCuatro,
  consultaCinco,
  consultaSeis,
  consultaSiete,
  consultaOcho,
  consultaNueve,
} = require("../controllers/bases");

//Empresas

router.get("/empresa", getEmpresas);
router.get("/empresa/:id", getEmpresaById);

router.post("/empresa", createEmpresa);
router.put("/empresa/:id", updateEmpresa);
router.delete("/empresa/:id", deleteEmpresa);

//Personas

router.get('/persona', getPersonas);
router.get('/persona/:id', getPersonaById);

router.post('/persona', createPersona);
router.put('/persona/:id', updatePersona);
router.delete('/persona/:id', deletePersona);

//Arquitecto

router.get('/arquitecto', getArquitecto);
router.get('/arquitecto/:correo', getArquitectoByCorreo);

router.post('/arquitecto', createArquitecto);
router.put('/arquitecto/:correo', updateArquitecto);
router.delete('/arquitecto/:correo', deleteArquitecto);

//Consultas

router.post("/consulta1", consultaUno);
router.get("/consulta2", consultaDos);
router.get("/consulta3", consultaTres);
router.get("/consulta4", consultaCuatro);
router.get("/consulta5", consultaCinco);
router.post("/consulta6", consultaSeis);
router.get("/consulta7", consultaSiete);
router.post("/consulta8", consultaOcho);
router.get("/consulta9", consultaNueve);


module.exports = router;
