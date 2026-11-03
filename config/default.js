module.exports = {
  DB: {
    Type: "postgres",
    User: "",
    Password: "",
    Port: 5432,
    Host: "",
    Database: "duo",
    Cluster: true,
    dialectOptions: {
      keepAlive: false,
      statement_timeout: 10000
    }
  }

};
