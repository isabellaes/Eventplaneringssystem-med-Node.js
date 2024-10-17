const express = require("express")
const app = express()

app.get("/api", (req, res) => {
    console.log("API-endpoint träffad");
    res.json({"event": ["event ett", "event två"]});
});


app.listen(5000, () => {console.log("server startat på port 5000")})