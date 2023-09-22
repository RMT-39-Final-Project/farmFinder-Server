const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "internal server error";

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    status = 400;
    message = err.errors[0].message;
  } else if (err.name === "investor_not_found") {
    status = 404;
    message = `Investor with id ${err.id} not found`;
  } else if (err.name === "email/password_required") {
    status = 400;
    message = "Email/Password required";
  } else if (err.name === "invalid_email/password") {
    status = 400;
    message = "Email/Password invalid";
  } else if (err.name === "not_found") {
    status = 404;
    message = "not found";
  } else if (err.name === "InvalidFarmId") {
    status = 404;
    message = "Farm not found";
  } else if (err.name === "farmer_banned") {
    status = 400;
    message = "Your account is banned";
  } else if (err.name === "Bad request") {
    status = 400;
    message = "Description cannot be empty!";
  } else if (err.name === "farmer_not_found") {
    status = 404;
    message = `Farmer with id ${err.id} not found`;
  } else if (err.name === "farmer_banned") {
    status = 400;
    message = "Your account is banned";
  } else if ((err.name = "report_not_found")) {
    status = 404;
    message = `report with id ${err.id} not found`;
  } else if (err.name === "farmer_not_found") {
    status = 400;
    message = `Farmer with id ${err.id} not found`;
  }
  res.status(status).json({ message: message });
};

module.exports = errorHandler;
