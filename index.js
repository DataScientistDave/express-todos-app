const express = require("express");

// Invokes the express app
const app = express();
// Allows express to use json
app.use(express.json());
app.use("/todos", require("./routes/todos"));

// To run the application type -> node index or use nodemon (npm run dev)
app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
