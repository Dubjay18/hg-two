/**
 * Express router providing person related routes
 * @module routes/person
 */

const { Router } = require("express");
const {
  CreatePerson,
  GetPersonById,
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
 * @name post/
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.post("/", CreatePerson);

/**
 * Route serving retrieval of a person by name.
 * @name get/:user_id
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.get("/:user_id", GetPersonById);

/**
 * Route serving update of a person by name.
 * @name put/:user_id
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.put("/:user_id", UpdatePerson);

/**
 * Route serving deletion of a person by name.
 * @name delete/user_id
 * @function
 * @memberof module:routes/person~PersonRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
PersonRouter.delete("/:user_id", DeletePerson);

module.exports = PersonRouter;
