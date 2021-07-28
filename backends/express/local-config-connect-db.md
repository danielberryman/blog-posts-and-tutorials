1. create config directory in /app directory
2. create db.config.js in the /app/config directory
3. Add the following code to it:
```javascript
module.exports = {
  HOST: "localhost",
  USER: "",
  PASSWORD: "",
  DB: ""
};
```
4. create models directory in /app directory
5. create db.js in /app/models directory
6. Add the following code to it:
```javascript
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
```
7. In the app/models directory create model files (name.model.js)
8. Add the following code to it and fill it out:
```javascript
const sql = require("./db.js");

// constructor
const Modelname = function(modelname) {
  this.field = modelname.field;
  // ...
};

Modelname.create = (newModelname, result) => {
  sql.query("INSERT INTO modelnames SET ?", newModelname, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created modelname: ", { id: res.insertId, ...newModelname });
    result(null, { id: res.insertId, ...newModelname });
  });
};

Modelname.findById = (modelnameId, result) => {
  sql.query(`SELECT * FROM modelnames WHERE id = ${modelnameId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found modelname: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Modelname with the id
    result({ kind: "not_found" }, null);
  });
};

Modelname.getAll = result => {
  sql.query("SELECT * FROM modelnames", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("modelnames: ", res);
    result(null, res);
  });
};

Modelname.updateById = (id, modelname, result) => {
  sql.query(
    "UPDATE modelnames SET field = ?, field2 = ?, field3 = ? WHERE id = ?",
    [modelname.field, modelname.field2, modelname.field3, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Modelname with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated modelname: ", { id: id, ...modelname });
      result(null, { id: id, ...modelname });
    }
  );
};

Modelname.remove = (id, result) => {
  sql.query("DELETE FROM modelnames WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Modelname with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted modelname with id: ", id);
    result(null, res);
  });
};

Modelname.removeAll = result => {
  sql.query("DELETE FROM modelnames", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} modelnames`);
    result(null, res);
  });
};

module.exports = Modelname;
```
9. create routes directory in /app directory
10. create modelname.routes.js in /app/routes
11. Add the following to it:
```javascript
module.exports = app => {
  const modelnames = require("../controllers/modelname.controller.js");

  // Create a new Customer
  app.post("/modelnames", modelnames.create);

  // Retrieve all Customers
  app.get("/modelnames", modelnames.findAll);

  // Retrieve a single Customer with modelnameId
  app.get("/modelnames/:modelnameId", modelnames.findOne);

  // Update a Customer with modelnameId
  app.put("/modelnames/:modelnameId", modelnames.update);

  // Delete a Customer with modelnameId
  app.delete("/modelnames/:modelnameId", modelnames.delete);

  // Create a new Customer
  app.delete("/modelnames", modelnames.deleteAll);
};
```
12. Place the following before listen in index.js
```javascript
require("./app/routes/modelname.routes.js")(app);
```
13. create controllers directory in /app directory
14. create the modelname.controller.js in app/controllers
15. add following code and fill it out:
```javascript
const Modelname = require("../models/modelname.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};
```
