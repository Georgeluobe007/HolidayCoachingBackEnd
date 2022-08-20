const express = require('express');
const app  = express();
const cors = require("cors");


     app.use(cors());

     app.use(express.json());

const db = require("./models")

const studentInfo = require("./Router/RegisterWork");
app.use("/studentInfo",studentInfo);


db.sequelize.sync().then(() => {
    app.listen( process.env.PORT || 3005, () => {
        console.log("app is running on port 3001");
    });
})
.catch((err) => {
   console.log(err);
});
