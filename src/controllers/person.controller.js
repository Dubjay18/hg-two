const Person = require("../models/person.model");

async function CreatePerson(req, res) {
  try {
    const { name, age } = req.body;
    // Basic validation, ensure name is a string
    if (typeof name !== "string") {
      return res
        .status(400)
        .json({ error: "Name must be a string" });
    }

    const person = new Person({ name, age });
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
async function GetPersonByName(req, res) {
  try {
    const name = req.params.name;
    const person = await Person.findOne({ name });

    if (!person) {
      return res
        .status(404)
        .json({ error: "Person not found" });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
async function UpdatePerson(req, res) {
  try {
    const name = req.params.name;
    const updatedPerson = req.body;

    const person = await Person.findOneAndUpdate(
      { name },
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

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

async function DeletePerson(req, res) {
  try {
    const name = req.params.name;
    const result = await Person.deleteOne({ name });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ error: "Person not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

async function GetAllPeople(req, res) {
  try {
    const people = await Person.find({});
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  CreatePerson,
  GetPersonByName,
  UpdatePerson,
  DeletePerson,
  GetAllPeople,
};
