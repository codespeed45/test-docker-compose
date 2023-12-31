import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

const app: FastifyInstance = fastify({ logger: true });

// Register CORS plugin
app.register(cors);

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
