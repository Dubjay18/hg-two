const request = require("supertest");
const app = require("../app");
const { default: mongoose } = require("mongoose");

describe("CRUD Operations", () => {
  let testPerson;

  // Test creating a new person
  it("should create a new person", async () => {
    const res = await request(app)
      .post("/api/persons")
      .send({ name: "John Doe" });

    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual("John Doe");

    // Store the created person for later tests
    testPerson = res.body;
  });

  // Test reading a person by name
  it("should read a person by name", async () => {
    const res = await request(app).get(
      `/api/persons/${testPerson.name}`
    );

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("John Doe");
  });

  // Test updating a person by name
  it("should update a person by name", async () => {
    const res = await request(app)
      .put(`/api/persons/${testPerson.name}`)
      .send({ name: "Updated Name" });

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Updated Name");
  });

  // Test deleting a person by name
  // Test deleting a person by name
  it("should delete a person by name", async () => {
    // Verify that the person was created successfully in a previous test
    expect(testPerson).toBeDefined();

    const res = await request(app).delete(
      `/api/persons/${testPerson.name}`
    );

    expect(res.statusCode).toEqual(204);

    // Verify that the person was deleted
    const getRes = await request(app).get(
      `/api/persons/${testPerson.name}`
    );
    expect(getRes.statusCode).toEqual(404);
  });
  afterAll(async () => {
    // Close the Mongoose connection
    await mongoose.connection.close();
  });
});
