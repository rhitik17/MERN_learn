const express = require("express");
const cors = require("cors");
const corsOption = {
  origin: ["http://localhost:5173"],
}
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

// dotenv configuration 
dotenv.config();

//middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(morgan("dev"))


// route
app.use('/api/v1/test', require('./routes/testRoutes'));

app.get("/", (req, res) => {
 return res
 .status(200)
 .send("welcome to the server")
});

// port
const PORT =process.env.PORT || 8080;

app.listen(PORT, ()=>{
 console.log(`server started on port ${PORT}`);
})