var connection = require("./connection");

var orm = {
  selectAll: function (tablename, cb) {
    connection.query("select * from ??;", [tablename], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (tablename, ColName, value, cb) {
    var sqlquery = "insert into ?? (??) value (?)";
    connection.query(sqlquery, [tablename, ColName, value], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  //   updateOne: function() {}
};

module.exports = orm;
