import express from "express";
import httpStatus from "http-status";
import supertest from "supertest";

const app = express();
const server = supertest(app);

describe("Testing rout get", ()=>{
    it("should respond with status 404", async ()=>{
        const response = await server.get("/countries/");

        expect(response.status).toBe(httpStatus.OK);
    });
});