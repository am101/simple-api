const express = require("express");
const bodyParser = require("body-parser");
// var, let, const

const app = express(); // initialise express app

// app.get
// app.post
// app.put
// app.delete
// app.patch

app.use(bodyParser.json());

// here we import all the routes
const User = require("./src/Routers/User");

app.use("/user", User);

app.get("/firstEndpoint", (req, res) => {
  try {
    // we are doing something
    const apple = req.body.apple ? req.body.apple : "";
    if (!apple) {
      throw "no APPLE Found"; // this sould go to the catch block
    }
    res.status(200).json({ status: 200, message: "Success", data: {} });
  } catch (error) {
    res.status(500).json({ status: 500, message: error + "", value: false });
  }
});
app.post("/firstPostApi", (req, res) => {
  try {
    const name = req.body.name ? req.body.name : "";
    const age = req.body.age ? req.body.age : "";
    console.log(name, age, "These are the name and age of request ");
    if (!name || !age) {
      throw "Invalid Request";
    }
    // do some stuff with the data
    res.status(200).json({
      status: 200,
      message: "Found you name and age Successfully",
      data: {},
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error + "", value: false });
  }
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
