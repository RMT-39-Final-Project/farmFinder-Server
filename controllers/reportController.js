const { Report } = require("../models");

class ReportController {
  static async getReport(req, res, next) {
    try {
      const report = await Report.findAll();

      res.status(200).json(report);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getReportById(req, res, next) {
    try {
      const reportDetail = await Report.findByPk(req.params.id);

      res.status(200).json(reportDetail);
    } catch (error) {
      next(error);
    }
  }

  static async postReport(req, res, next) {
    try {
      const { description } = req.body;

      const report = await Report.create({
        description,
      });

      if (!description) {
        throw { name: "Bad request" };
      }

      res.status(201).json({ message: "New description added" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReportController;
