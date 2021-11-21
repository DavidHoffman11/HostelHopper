"use strict";
var sql = require("./connection.js");

var Host = function(host)
{
  this.user_id = host.user_id;
  this.title = host.title;
  this.body = host.body;
  this.price = host.price;
  this.state = host.state;
  this.address = host.address;
  this.country = host.country;
  this.zip = host.zip;
  this.phone = host.phone;
  this.image_url = host.image_url;
  this.city = host.city;
};

exports.get_hosts = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `host`;",
    null,
    function(sqlErr, sqlRes)
    {
      if (sql.isSuccessfulQuery(sqlErr, res))
      {
        res.status(200).send(
        {
          success: true,
          count: Object.keys(sqlRes).length,
          info: sqlRes,
        });
      }
    }
  );
};

exports.create_host = function(req, res)
{
  if (sql.propertyCheck(req, res, ["title", "body", "price", "state","address","country","zip","phone","image_url","city"]))
  {
    var newHost = new Host(req.body);

    sql.connection.query(
      "INSERT INTO `host` SET ?;",
      newHost,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          sql.connection.query(
            "SELECT * FROM `host` WHERE `id` = ?;",
            sqlRes.insertId,
            function(subErr, subRes)
            {
              if (sql.isSuccessfulQuery(subErr, res))
              {
                res.status(200).send(
                {
                  success: true,
                  response: "Succesfully created host",
                  info: subRes,
                });
              }
            }
          );
        }
      }
    );
  }
};

exports.get_host = function(req, res)
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
      "SELECT * FROM `host` WHERE id = ?;",
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
              response: "Couldn't find host " + req.params.id,
            });
          }
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully found host " + req.params.id,
              info: sqlRes,
            });
          }
        }
      }
    );
  }
}

exports.update_host = function(req, res)
{
  if (req.body.length <= 0)
  {
    res.status(400).send(
    {
      success: false,
      response: "Empty request body",
    });
  }
  else
  {
    sql.connection.query(
      "UPDATE `host` SET ? WHERE `id` = ?;",
      [req.body, req.params.id],
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.affectedRows == 0)
          {
            res.status(200).send(
            {
              success: false,
              response: "Nothing was updated, host " + req.params.id + " might not exist.",
            });
          }
          else
          {
            sql.connection.query(
              "SELECT * FROM `host` WHERE `id` = ?;",
              req.params.id,
              function(subErr, subRes)
              {
                if (sql.isSuccessfulQuery(subErr, res))
                {
                  res.status(200).send(
                  {
                    success: true,
                    response: "Successfully updated host " + req.params.id,
                  });
                }
              }
            );
          }
        }
      }
    );
  }
}

exports.delete_host = function(req, res)
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
      "DELETE FROM `host` WHERE `id` = ?;",
      req.params.id,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (sqlRes.affectedRows == 0)
          {
            res.status(200).send(
            {
              success: false,
              response: "No user with id " + req.params.id + " found, nothing deleted",
            });
          }
          else
          {
            res.status(200).send(
            {
              success: true,
              response: "Successfully deleted host",
              info: sqlRes,
            });
          }
        }
      }
    );
  }
};