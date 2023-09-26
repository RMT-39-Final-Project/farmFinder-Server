const express = require("express");
const InvestController = require("../controllers/investController");
const { authInvestor } = require("../middlewares/auth");
const invest = express.Router();

invest
  .use(authInvestor)
  .get("/", InvestController.getInvest)
  .post("/:id", InvestController.postInvest)
  .get("/:id", InvestController.getInvestById);

module.exports = invest;
