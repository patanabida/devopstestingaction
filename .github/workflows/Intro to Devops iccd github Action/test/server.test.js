// server.test.js
const request = require('supertest');
const app = require("../server");

describe('GET /sum', () => {
    it('should return the sum of two numbers', async () => {
        const response = await request(app).get('/sum?a=2&b=3');
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(5);
    });

    it('should return an error for invalid numbers', async () => {
        const response = await request(app).get('/sum?a=2&b=abc');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid numbers');
    });
});

describe('GET /multiply', () => {
    it('should return the product of two numbers', async () => {
        const response = await request(app).get('/multiply?a=2&b=3');
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(6);
    });

    it('should return an error for invalid numbers', async () => {
        const response = await request(app).get('/multiply?a=2&b=abc');
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid numbers');
    });
});
