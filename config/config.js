


module.exports = {
  
    "development": {
      "username":process.env.DB_Root,
      "password":process.env.User_Passowrd ,
      "database":process.env.User_Data_Base,
      "host":process.env.User_Host,
      "dialect":process.env.User_Dialect 
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  
