const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//routes
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api/index")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));


//configuration
const dotEnv = require("dotenv");
dotEnv.config({ path: "./config/config.env" });

//set database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO);
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     name: { type: String, required: true }
// })

// const userModel = mongoose.model("User", UserSchema);

// new userModel({
//     name: "Reza"
// }).save((error) => console.log(error))


app.use(webRouter);
app.use('/api',apiRouter);


const PORT = process.env.PORT;

app.listen(PORT, console.log(`server is running on port ${PORT}`));