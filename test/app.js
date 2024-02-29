import express from "express"
const app = express();
app.get(`/`, (req, res) => {
    res.send(`Welcome to CORS server :grin:`)
})
app.get(`/cors`, (req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.send({"msg": "This has cors enabled"})
})
app.listen(8080, () => {
    console.log(`listening on port 8080`)
})