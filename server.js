const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// ✅ CORS headers first
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ✅ Default middleware after CORS
const middlewares = jsonServer.defaults();
server.use(middlewares);

// ✅ API routes
server.use(router);

// ✅ Dynamic port for Render
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});
