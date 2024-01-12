const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

// get
router.get("/", todoController.get);

// get all
router.get("/:id", todoController.getAll);

// create
router.post("/", todoController.create);

// update
router.put("/:id", todoController.update);

// delete
router.delete("/:id", todoController.delete);
