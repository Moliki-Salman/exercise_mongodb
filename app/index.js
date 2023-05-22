const express = require("express");
const {json} = require("express");
const connect = require("./config/database");
const userRoute = require("./routers/userRouters");

connect()
const app = express();
app.use(json());
app.use("/User", userRoute);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Moliki-Salman's Training on mongodb");
});

//a function that tell showa the portnumber the server runs.
app.listen(PORT, () => console.log(`serving on port ${PORT}`));
