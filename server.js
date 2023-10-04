const express = require('express');
require("dotenv").config();
require("./config/database.js")

const doctorRouter = require('./routes/doctorRouter')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.set("port",PORT);
app.get("/",(req,res)=> {
    res.send("servidor creado")
});

app.use('/api',doctorRouter)

app.listen(PORT,()=>console.log("servidor corriendo en el puerto: "+PORT));
