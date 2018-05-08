module.exports = {
  "DB": {
      "Type": "mssql",
      "User": "sa",
      "Password": "DuoSql@2017",
      "Port": 1433,
      "Host": "104.236.61.130",
      "Database": "facetone",
      "Cluster": true,
      "dialectOptions":{
          "keepAlive": false,
          "statement_timeout": 10000
      }
  }
};