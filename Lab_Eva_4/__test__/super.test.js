//es el archivo q queiroe q elas es un modulo que necesita exportarlo
const request = require("supertest");


const app = require('./index.js');
describe("Probar las rutas", () => {
  test("Retornar otro metodo POST PERO con el status del code", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("METODO POST ", () => {
  it("Deberia responder con un array de estudiantes", async () => {
    const response = await request(app).post("/");
    expect(response.body).toEqual(["Maria", "Matias", "Antonio", "Clarissa"]);
    expect(response.statusCode).toBe(200);
  });
});

