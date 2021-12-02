"use strict";

var sql = require("./connection.js");

var Host = function Host(host) {
    this.user_id = host.user_id;
    this.title = host.title;
    this.body = host.body;
    this.price = host.price;
    this.name = host.name;
    this.password = host.password;
    this.email = host.email;
    this.zip_code = host.zip_code;
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
    this.location = host.location;
    this.slogan = host.slogan;
};

exports.create_host = function (req, res) {
  if (sql.propertyCheck(req, res, ["title", "body", "price", "zip_code", "name","email","password","phone","image_url","city","food_info","living_options","attractions","is_pet_friendly","is_covid_safe","has_lockers","has_gendered_rooms","location","slogan"])) {
    var newHost = new Host(req.body);
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