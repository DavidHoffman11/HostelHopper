"use strict";

module.exports = function(app)
{
  var userController = require("../model/user");
  var hostController = require("../model/host");
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
  app.route("/api/host/").get(hostController.get_hosts);
  app.route("/api/host/").post(hostController.create_host);
  app.route("/api/host/:id").get(hostController.get_host);
  app.route("/api/host/:id").put(hostController.update_host);
  app.route("/api/host/:id").delete(hostController.delete_host);

  // REVIEW

  app.route("/api/host/:id/review").get(reviewController.get_reviews);
  app.route("/api/host/:id/review").post(reviewController.create_review);
  app.route("/api/host/:id/review/:reviewId").delete(reviewController.delete_review);

  // REVIEW
  app.route("/api/host/:id/review").get(reviewController.get_reviews);
  app.route("/api/host/:id/review/").post(reviewController.create_review);
  app.route("/api/host/:host_id/review/:id").delete(reviewController.delete_review);
/*
  // REVIEW LIKES
  /* Notes:
    - Post -> Frontend job to send 0 or 1 to set to like or dislike
    - Get -> Two routes one for likes one for dislikes
    - Frontend job to create logic to have button highlighed if user has already liked or dislike and to call unlike route when user clicks highlighted button
  */

  //- Both - works for both like and dislike
  app.route("/api/review/:reviewId/like").post(reviewController.like_review);
  app.route("/api/review/:reviewId/like/:userId").delete(reviewController.unlike_review);

  //- Like specific
  app.route("/api/review/:reviewId/like").get(reviewController.get_likes);

  //- Dislike specific
  app.route("/api/review/:reviewId/dislike").get(reviewController.get_dislikes);

  //END REVIEW LIKES

  //REPLY
  app.route("/api/review/:id/reply").get(reviewController.get_replies);
  app.route("/api/review/:id/reply").post(reviewController.create_reply);
  app.route("/api/review/:reviewId/reply/:id").delete(reviewController.delete_reply);

};
