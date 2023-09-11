const Person = require("../models/person.model");

/**
 * Creates a new person with the given name.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The newly created person object.
 */
async function CreatePerson(req, res) {
  try {
    const { name } = req.body;
    // Basic validation, ensure name is a string
    if (typeof name !== "string") {
      return res
        .status(400)
        .json({ error: "Name must be a string" });
    }

    const person = new Person({ name });
    await person.save();
    const sanitizedPerson = {
      ...person.toObject(),
      __v: undefined,
    };
    res.status(201).json(sanitizedPerson);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

/**
 * Gets the person with the given id.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The person object with the given name.
 */
async function GetPersonById(req, res) {
  try {
    const user_id = req.params.user_id;
    const person = await Person.findOne({ _id: user_id });

    if (!person) {
      return res
        .status(404)
        .json({ error: "Person not found" });
    }
    const sanitizedPerson = {
      ...person.toObject(),
      __v: undefined,
    };
    res.json(sanitizedPerson);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

/**
 * Updates the person with the given name.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The updated person object.
 */
async function UpdatePerson(req, res) {
  try {
    const user_id = req.params.user_id;
    const updatedPerson = req.body;

    const person = await Person.findOneAndUpdate(
      { _id: user_id },
      updatedPerson,
      {
        new: true,
      }
    );

    if (!person) {
      return res
        .status(404)
        .json({ error: "Person not found" });
    }
    const sanitizedPerson = {
      ...person.toObject(),
      __v: undefined,
    };
    res.json(sanitizedPerson);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

/**
 * Deletes the person with the given name.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A success message.
 */
async function DeletePerson(req, res) {
  try {
    const user_id = req.params.user_id;
    const result = await Person.deleteOne({ _id: user_id });

    if (result.n === 0) {
      return res
        .status(404)
        .json({ error: "Person not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

// /**
//  * Gets all people.
//  * @async
//  * @param {Object} req - The request object.
//  * @param {Object} res - The response object.
//  * @returns {Array} An array of all person objects.
//  */
// async function GetAllPeople(req, res) {
//   try {
//     const people = await Person.find({});
//     res.json(people);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// }

module.exports = {
  CreatePerson,
  GetPersonById,
  UpdatePerson,
  DeletePerson,
  //   GetAllPeople,
};
