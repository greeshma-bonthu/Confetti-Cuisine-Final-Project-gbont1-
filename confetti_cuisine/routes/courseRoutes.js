"use strict";

const router = require("express").Router(),
  coursesController = require("../controllers/coursesController");

router.get("", coursesController.index, coursesController.indexView);
router.get("/new", coursesController.authorize, coursesController.new);
router.post(
  "/create",
  coursesController.authorize,
  coursesController.create,
  coursesController.redirectView
);
router.get("/:id/edit", coursesController.authorize, coursesController.edit);
router.put(
  "/:id/update",
  coursesController.authorize,
  coursesController.update,
  coursesController.redirectView
);
router.get("/:id", coursesController.show, coursesController.showView);
router.delete(
  "/:id/delete",
  coursesController.authorize,
  coursesController.delete,
  coursesController.redirectView
);

module.exports = router;
