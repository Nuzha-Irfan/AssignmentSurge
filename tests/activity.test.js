const mongoose = require("mongoose");
const request = require("supertest");
const connectDB = require('../config/db');
const app = require("../app");


beforeEach(async () => {
    await connectDB();
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  describe("GET /api/posts", () => {
    it("should get all the posts", async () => {
      const token = await request(app).post("/api/auth").send({
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      });
  
      const response = await request(app)
        .get("/api/posts")
        .set({
          Authorization: "bearer " + token.body.token,
          "Content-Type": "application/json",
        });
  
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("POST /api/auth", () => {
    it("Validate user login ", async () => {
     
  
      const response = await request(app)
        .post("/api/auth")
        .send({
          email: 'testuser@gmail.com', password: 'wrongpassword'
          
        });
  
      expect(response.statusCode).toBe(400);
      expect(response.data).toEqual({ message: 'Invalid Credentials' });
    });
  });


 

 
  