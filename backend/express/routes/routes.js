"use strict";

module.exports = function(app)
{
  var userController = require("../model/user");
  var hostelController = require("../model/hostel");
  var reviewController = require("../model/review");

  app.route("/").get(function(req, res)
  {
    res.status(200).send({ response: new Date(), });
  });

  app.route("/reset").get(function(req, res)
  {
    var sql = require("../model/review.js");
    sql.connection.query("CALL sp_reset;", null, function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        res.status(200).send(
        {
          success: true,
          response: "Database reset",
          info: sqlRes,
        });
      }
    });
  });

  // USER
  app.route("/api/user/").get(userController.get_users);
  app.route("/api/user/").post(userController.create_user);
  app.route("/api/user/:id").get(userController.get_user);
  app.route("/api/user/:id").put(userController.update_user);
  app.route("/api/user/:id").delete(userController.delete_user);
  app.route("/api/login").post(userController.login_user);

  // HOSTEL

  // REVIEW
  app.route("/api/host/:id/review").get(reviewController.get_comments);
  app.route("/api/host/:id/review").post(reviewController.create_comment);
  app.route("/api/host/:id/review/:id").delete(reviewController.delete_comment);

  // COMMENT LIKES
  app.route("/api/host/:id/review/:id/like").get(reviewController.get_likes);
  app.route("/api/host/:id/review/:id/like").post(reviewController.like_review);
  app.route("/api/host/:id/review/:id/like/:user_id").delete(reviewController.unlike_review);
};