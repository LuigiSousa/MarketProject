const express = require("express")
const app = new express()

const cors = require("cors")

const items = require("./data/items")

app.use(cors())

app.get("/apiInfo", (req, res) => {
    res.send(JSON.stringify(items))
})

app.get("*", (req, res) => {
    res.redirect("/apiInfo")
})

app.listen('2200', () => {
    console.log('Server is running on port 2200')
})