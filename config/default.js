module.exports = {
  "DB": {
      "Type": "postgres",
      "User": "duo",
      "Password": "DuoS123",
      "Port": 5432,
      "Host": "127.0.0.1",
      "Database": "facetone",
      "Cluster": true,
      "dialectOptions":{
          "keepAlive": false,
          "statement_timeout": 10000
      }
  }
};