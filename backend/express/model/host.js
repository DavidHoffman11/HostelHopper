"use strict";
var sql = require("./connection.js");

var Host = function(host)
{
  this.name = host.name;
  this.password = host.password;
  this.email = host.email;
  this.zip_code = host.zip_code;
  this.body = host.body;
  this.price = host.price;
  this.image_url = host.image_url;
  this.food_info = host.food_info;
  this.living_options = host.living_options;
  this.attractions = host.attractions;
  this.is_pet_friendly = host.is_pet_friendly;
  this.is_covid_safe = host.is_covid_safe;
  this.has_lockers = host.has_lockers;
  this.has_gendered_rooms = host.has_gendered_rooms;
  this.location = host.location;
  this.slogan = host.slogan;
};

exports.login_host = function(req, res)
{
  if (sql.propertyCheck(req, res, ["email", "password"]))
  {
    var loginHost = new Host(req.body);

    sql.connection.query(
      "SELECT * FROM `host` WHERE `email` = ?;",
      loginHost.email,
      function(sqlErr, sqlRes)
      {
        if (sql.isSuccessfulQuery(sqlErr, res))
        {
          if (!Object.keys(sqlRes).length)
          {
            res.status(401).send(
            {
              success: false,
              response: "Email not found",
            });
          }
          else
          {
            if (sqlRes[0].password == loginHost.password)
            {
              res.status(200).send(
              {
                success: true,
                response: "Successfully logged in",
                info: sqlRes,
              });
            }
            else
            {
              res.status(401).send(
              {
                success: false,
                response: "Password does not match email",
              });
            }
          }
        }
      }
    );
  }
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
  if (sql.propertyCheck(req, res, ["body", "price", "zip_code", "name","email","password","image_url","food_info","living_options","attractions","is_pet_friendly","is_covid_safe","has_lockers","has_gendered_rooms","location","slogan"]))
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
              response: "No host with id " + req.params.id + " found, nothing deleted",
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


//Filtering
exports.get_hosts_price = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `host` ORDER BY `price`;",
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


exports.get_hosts_gender = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `host` WHERE `has_gendered_rooms` = 1;",
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

exports.get_hosts_lockers = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `host` WHERE `has_lockers` = 1;",
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

exports.get_hosts_covid = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `host` WHERE `is_covid_safe` = 1;",
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

exports.get_hosts_pet = function(req, res)
{
  sql.connection.query(
    "SELECT * FROM `host` WHERE `is_pet_friendly` = 1;",
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