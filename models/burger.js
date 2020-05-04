var orm = require("../config/orm");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  add: function (tablename, colname, value, cb) {
    orm.insertOne(tablename, colname, value, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
