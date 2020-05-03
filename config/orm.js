var connection = require("./connection");

var orm = {
  selectAll: function (tablename, cb) {
    connection.query("select * from ??;", [tablename], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //   insertOne: function() {},
  //   updateOne: function() {}
};

module.exports = orm;
