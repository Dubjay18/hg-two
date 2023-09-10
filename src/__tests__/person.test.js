const request = require("supertest");
const app = require("./your-express-app-file"); // Replace with the path to your Express app file

describe("CRUD Operations", () => {
  let testPerson;

  // Test creating a new person
  it("should create a new person", async () => {
    const res = await request(app)
      .post("/api/persons")
      .send({ name: "John Doe", age: 30 });

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
      .send({ name: "Updated Name", age: 35 });

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Updated Name");
  });

  // Test deleting a person by name
  it("should delete a person by name", async () => {
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
});
