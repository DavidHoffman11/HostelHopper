"use strict";
const { json } = require("body-parser");
var sql = require("./connection.js");

var Review = function(review)
{
  this.date = review.date;
  this.host_id = review.host_id;
  this.user_id = review.user_id;
  this.body = review.body;
  this.rating = review.rating;
  this.user_name = review.user_name;
};

var Reply = function(reply)
{
  this.date = reply.date;
  this.id = reply.id;
  this.review_id = reply.review_id;
  this.user_id = reply.user_id;
  this.body = reply.body;
};

exports.create_review = function(req, res)
{
  if (sql.propertyCheck(req, res, ["user_id", "body","rating"]))
  {
    var newreview = new Review(req.body);
    newreview.date = new Date();
    newreview.host_id = req.params.id;
    newreview.rating = req.body.rating;

    sql.connection.query(
      "INSERT INTO `review` SET ?;",
      newreview,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          sql.connection.query(
            "SELECT * FROM `review` WHERE `id` = ?;",
            sqlRes.insertId,
            function(subErr, subRes)
            {
              if (sql.isSuccessfulQuery(subErr, res))
              {
                res.status(200).send(
                {
                  success: true,
                  response: "Successfully created review",
                  info: subRes,
                });
              }
            }
          )

        }
      }
    );
  }
};

exports.get_reviews = function(req, res)
{
  if (!("id" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `id`",
    });
  }
  else
  {
    sql.connection.query(
      "SELECT * FROM `review` WHERE host_id = ?;",
      req.params.id,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.length <= 0)
          {
            res.status(200).send(
            {
              success: false,
              response: "No reviews found for host " + req.params.id,
            })
          }
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully found reviews for host " + req.params.id,
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

exports.delete_review = function(req, res)
{
  sql.connection.query(
    "DELETE FROM `review` WHERE `host_id` = ? AND `id` = ?;",
    [req.params.id, req.params.host_id],
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        if (sqlRes.affectedRows == 0)
        {
          res.status(200).send(
          {
            success: false,
            response: "No host with id " + req.params.host_id + " & review with id " + req.params.id + " found, review not deleted",
          });
        }
        else
        {
          res.status(200).send(
          {
            success: true,
            response: "Successfully deleted review " + req.params.reviewId,
          });
        }
      }
    }
  );
}


//////// LIKES ////////

exports.get_likes = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `like` WHERE `review_id` = ? AND `is_dislike` = 0 GROUP BY `user_id`;",
    req.params.reviewId,
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        var idArray = [];
        for (var i = 0; i < sqlRes.length; i++)
        {
          idArray.push(sqlRes[i].user_id);
        }

        res.status(200).send(
        {
          success: true,
          count: Object.keys(sqlRes).length,
          info: idArray,
        });
      }
    }
  );
};

exports.get_dislikes = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `like` WHERE `review_id` = ? and `is_dislike` = 1 GROUP BY `user_id`;",
    req.params.reviewId,
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        var idArray = [];
        for (var i = 0; i < sqlRes.length; i++)
        {
          idArray.push(sqlRes[i].user_id);
        }

        res.status(200).send(
        {
          success: true,
          count: Object.keys(sqlRes).length,
          info: idArray,
        });
      }
    }
  );
};

exports.like_review = function(req, res)
{
  if (sql.propertyCheck(req, res, ["user_id"]))
  {
    sql.connection.query(
      "INSERT INTO `like` SET ?;",
      {
        review_id: req.params.reviewId,
        user_id: req.body.user_id,
        is_dislike: req.body.is_dislike
      },
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          res.status(200).send(
          {
            success: true,
            response: "Successfully liked review",
          });
        }
      }
    )
  }
}

exports.unlike_review = function(req, res)
{
  sql.connection.query(
    "DELETE FROM `like` WHERE `user_id` = ? AND `review_id` = ?;",
    [req.params.userId, req.params.reviewId],
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        if (sqlRes.affectedRows == 0)
        {
          res.status(200).send(
          {
            success: false,
            response: "No review with id " + req.params.reviewId + " & user with id " + req.params.userId + " found, like not removed",
          });
        }
        else
        {
          res.status(200).send(
          {
            success: true,
            response: "Successfully unliked review",
          });
        }
      }
    }
  )
}

//////// REPLY ////////

exports.get_replies = function(req, res)
{
  if (!("id" in req.params))
  {
    res.status(400).send(
    {
      success: false,
      response: "Missing required field: `id`",
    });
  }
  else
  {
    sql.connection.query(
      "SELECT * FROM `reply` WHERE review_id = ?;",
      req.params.id,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.length <= 0)
          {
            res.status(200).send(
            {
              success: false,
              response: "No replies found for review " + req.params.id,
            })
          }
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully found replies for review " + req.params.id,
              count: Object.keys(sqlRes).length,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

exports.create_reply = function(req, res)
{
  if (sql.propertyCheck(req, res, ["user_id", "body"]))
  {
    var newreply = new Reply(req.body);
    newreply.date = new Date();
    newreply.review_id = req.params.id;

    sql.connection.query(
      "INSERT INTO `reply` SET ?;",
      newreply,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          sql.connection.query(
            "SELECT * FROM `reply` WHERE `id` = ?;",
            sqlRes.insertId,
            function(subErr, subRes)
            {
              if (sql.isSuccessfulQuery(subErr, res))
              {
                res.status(200).send(
                {
                  success: true,
                  response: "Successfully created review",
                  info: subRes,
                });
              }
            }
          )

        }
      }
    );
  }
};

exports.delete_reply = function(req, res)
{
  sql.connection.query(
    "DELETE FROM `reply` WHERE `review_id` = ? AND `id` = ?;",
    [req.params.reviewId, req.params.id],
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        if (sqlRes.affectedRows == 0)
        {
          res.status(200).send(
          {
            success: false,
            response: "No reply with id " + req.params.id + " for review with id " + req.params.reviewId + " found, review not deleted",
          });
        }
        else
        {
          res.status(200).send(
          {
            success: true,
            response: "Successfully deleted reply " + req.params.id,
          });
        }
      }
    }
  );
}
