/**
 * Express router providing person related routes
 * @module routes/person
 */

const { Router } = require("express");
const {
  CreatePerson,
  GetPersonByName,
  UpdatePerson,
  DeletePerson,
} = require("../controllers/person.controller");

/**
 * Express router to mount person related functions on.
 * @type {object}
 * @const
 * @namespace PersonRouter
 */
const PersonRouter = Router();

/**
 * Route serving creation of a new person.
 * @name post/persons
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.post("/persons", CreatePerson);

/**
 * Route serving retrieval of a person by name.
 * @name get/persons/:name
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.get("/persons/:name", GetPersonByName);

/**
 * Route serving update of a person by name.
 * @name put/persons/:name
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.put("/persons/:name", UpdatePerson);

/**
 * Route serving deletion of a person by name.
 * @name delete/persons/:name
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.delete("/persons/:name", DeletePerson);

module.exports = PersonRouter;
