module.exports = {
  "DB": {
      "Type": "postgres",
      "User": "duo",
      "Password": "DuoS123",
      "Port": 5432,
      "Host": "104.236.231.11",
      "Database": "duo",
      "Cluster": true,
      "dialectOptions":{
          "keepAlive": false,
          "statement_timeout": 10000
      }
  }
};