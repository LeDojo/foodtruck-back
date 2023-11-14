const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const foodtrucks = [];

// GET  - Tout les foodtrucks
router.get("/all", (req, res) => {
  res.send(foodtrucks);
});
// POST  - cree un foodtrucks
router.post("/add", (req, res) => {
  try {
    let newFoodtruck = req.body;
    newFoodtruck.id = uuidv4();
    console.log(newFoodtruck);
    foodtrucks.push(newFoodtruck);
    console.log(foodtrucks)
    res.send({ message: "Add foodtrucks successfully", newFoodtruck });
  } catch (error) {
    console.error("Error adding foodtruck:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// GET - voir un foodtruck
router.get("/:id", (req, res) => {
  res.send(foodtrucks.find((foodtruck) => foodtruck.id === req.params.id));
});
// PUT - mise a jour du fooddtruck
router.put("/edit/:id", (req, res) => {
  foodtrucks.map((foodtruck) => {
    if (foodtruck.id === req.params.id) {
      Object.assign(foodtruck, {
        name: req.body.name,
        type: req.body.type,
        location: req.body.location,
      });
      res.send({ message: "foodtruck updated !", foodtruck });
    }
  });
});
router.delete("/:id/delete", (req, res) => {
  foodtrucks.find((foodtruck) => {
    if (foodtruck.id === req.params.id) {
      // console.log(foodtrucks.indexOf(foodtruck));
      foodtrucks.splice(foodtrucks.indexOf(foodtruck), 1);
      res.send({ message: "foodtruck deleted !", foodtruck });
    }
  });
});

module.exports = router;
