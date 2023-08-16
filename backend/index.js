"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)({ logger: true });
// Register CORS plugin
app.register(cors_1.default);
// Declare a route
app.get("/data", (request, reply) => {
    reply.send({ hello: "world" });
});
// Run the server!
app.listen({ port: 5500, host: "0.0.0.0" }, (err) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});
