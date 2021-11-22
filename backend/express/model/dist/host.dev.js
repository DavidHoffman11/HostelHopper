"use strict";

var sql = require("./connection.js");

var Host = function Host(host) {
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

exports.create_host = function (req, res) {
  if (sql.propertyCheck(req, res, ["title", "body", "price", "state","address","country","zip","phone","image_url","city"])) {
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
          response: "No user with id " + req.params.id + " found, nothing deleted"
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