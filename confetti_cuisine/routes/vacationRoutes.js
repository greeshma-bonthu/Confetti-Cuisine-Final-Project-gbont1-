"use strict";

const router = require("express").Router(),
  vacationsController = require("../controllers/vacationsController");

router.get("", vacationsController.index, vacationsController.indexView);
router.get("/new", vacationsController.authorize, vacationsController.new);
router.post(
  "/create",
  vacationsController.authorize,
  vacationsController.create,
  vacationsController.redirectView
);
router.get(
  "/:id/edit",
  vacationsController.authorize,
  vacationsController.edit
);
router.put(
  "/:id/update",
  vacationsController.authorize,
  vacationsController.update,
  vacationsController.redirectView
);
router.get("/:id", vacationsController.show, vacationsController.showView);
router.delete(
  "/:id/delete",
  vacationsController.authorize,
  vacationsController.delete,
  vacationsController.redirectView
);

module.exports = router;
