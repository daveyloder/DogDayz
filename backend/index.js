const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.use("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
