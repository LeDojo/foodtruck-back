const express = require("express");
const app = express();

const port = process.env.PORT || 4567;

const foodtruckRouter = require("./routes/basicRoute");

app.use(express.json())

app.get("/", (req, res) => {
  res.send("RECOUCOU LES LOULOUS");
});

app.use("/foodtrucks", foodtruckRouter);
app.listen(port, () => console.log(`listening on port : ${port}`));
