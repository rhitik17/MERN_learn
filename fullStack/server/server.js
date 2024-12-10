const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOption));

app.get("/fruits", (req, res) => {
  res.json({ fruits: ["apple", "banana", "strawberry"] });
});

app.listen(8080, ()=>{
 console.log("server started on port 8080")
})