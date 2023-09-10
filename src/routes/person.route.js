const { Router } = require("express");
const {
  CreatePerson,
  GetPersonByName,
  UpdatePerson,
  DeletePerson,
  GetAllPeople,
} = require("../controllers/person.controller");

const PersonRouter = Router();

PersonRouter.post("/person", CreatePerson);
PersonRouter.get("/person/:name", GetPersonByName);
PersonRouter.put("/person/:name", UpdatePerson);
PersonRouter.delete("/person/:name", DeletePerson);
PersonRouter.get("/person/all", GetAllPeople);
module.exports = PersonRouter;
