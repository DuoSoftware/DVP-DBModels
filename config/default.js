module.exports = {
  DB: {
    Type: "postgres",
    User: "duo",
    Password: "DuoS123",
    Port: 5432,
    Host: "ec2-3-15-222-85.us-east-2.compute.amazonaws.com",
    Database: "duo",
    Cluster: true,
    PoolMax: 5,
    PoolMin: 0,
    dialectOptions: {
      keepAlive: true,
      statement_timeout: 60000
    }
  }

  // "DB": {
  //     "Type": "mssql",
  //     "User": "sa",
  //     "Password": "DuoSql@2017",
  //     "Port": 1433,
  //     "Host": "104.236.61.130",
  //     "Database": "auth",
  //     "Cluster": true,
  //     "dialectOptions":{
  //         "keepAlive": false,
  //         "statement_timeout": 10000
  //     }
  // }
};
