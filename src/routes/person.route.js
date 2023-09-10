const { Router } = require("express");
const {
  CreatePerson,
  GetPersonByName,
  UpdatePerson,
  DeletePerson,
  GetAllPeople,
} = require("../controllers/person.controller");

const PersonRouter = Router();

PersonRouter.post("/persons", CreatePerson);
PersonRouter.get("/persons/:name", GetPersonByName);
PersonRouter.put("/persons/:name", UpdatePerson);
PersonRouter.delete("/persons/:name", DeletePerson);
// PersonRouter.get("/persons", GetAllPeople);
module.exports = PersonRouter;
