"use strict";

var sql = require("./connection.js");

var Hostel = function Hostel(hostel) {
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
    this.food_info = food_info;
    this.living_options = living_options;
    this.attractions = attractions;
    this.is_pet_friendly = is_pet_friendly;
    this.is_covid_safe = is_covid_safe;
    this.has_lockers = has_lockers;
    this.has_gendered_rooms = has_gendered_rooms;
};

exports.create_host = function (req, res) {
  if (sql.propertyCheck(req, res, ["title", "body", "price", "state","address","country","zip","phone","image_url","city","food_info","living_options","attractions","is_pet_friendly","is_covid_safe","has_lockers","has_gendered_rooms"])) {
    var newHost = new Hostel(req.body);
    sql.connection.query("INSERT INTO `host` SET ?;", newHost, function (sqlErr, sqlRes) {
      if (sqlErr) {
        sql.respondSqlError(sqlErr, res);
      } else {
        res.status(200).send({
          response: "Succesfully created host",
          info: sqlRes
        });
      }
    });
  }
};

exports.login_host = function (req, res) {
  if (sql.propertyCheck(req, res, ["email", "password"])) {
    var loginUser = new User(req.body);
    sql.connection.query("SELECT * FROM `user` WHERE `email` = ? AND `password` = ?;", [loginUser.email, loginUser.password], function (sqlErr, sqlRes) {
      if (sqlErr) {
        sql.respondSqlError(sqlErr, res);
      } else {
        if (!Object.keys(sqlRes).length) {
          res.status(401).send({
            response: "No matching email and password"
          });
        } else {
          res.status(200).send({
            response: "Successfully logged in",
            info: sqlRes
          });
        }
      }
    });
  }
};

exports.delete_host = function (req, res) {
  if (!("id" in req.params)) {
    res.status(400).send({
      response: "Missing required field: `id`"
    });
  } else {
    sql.connection.query("DELETE FROM `host` WHERE id = ?;", req.params.id, function (sqlErr, sqlRes) {
      if (sqlErr) {
        sql.respondSqlError(sqlErr, res);
      } else if (sqlRes.affectedRows == 0) {
        res.status(200).send({
          response: "No host with id " + req.params.id + " found, nothing deleted"
        });
      } else {
        console.log(sqlRes);
        res.status(200).send({
          response: "Successfully deleted host",
          info: sqlRes
        });
      }
    });
  }
};