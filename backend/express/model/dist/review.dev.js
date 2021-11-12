"use strict";

var sql = require("./connection.js");

var Review = function Review(review) {
  this.date = review.date;
  this.id = review.id;
  this.parent_review_id = review.parent_review_id;
  this.host_id = review.host_id;
  this.user_id = review.user_id;
  this.body = review.body;
  this.rating = review.rating;
};

exports.create_review = function (req, res) {
  if (sql.propertyCheck(req, res, ["trip_id", "user_id", "body", "rating"])) {
    var newreview = new review(req.body);
    newreview.date = new Date();
    sql.connection.query("INSERT INTO `review` SET ?;", newreview, function (sqlErr, sqlRes) {
      if (sqlErr) {
        sql.respondSqlError(sqlErr, res);
      } else {
        res.status(200).send({
          response: "Successfully created review",
          info: sqlRes
        });
      }
    });
  }
};