const express = require("express");
const app = express();
const bodyParser = require("body-parser");
urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.set("view engine", "ejs")

let values = [{ date: "2020/11/02", day: "Morning", title: "Attend Mass" }];

// displaying data
app.get("/", (req, res) => {
    res.render("index", { data: values });
});

// creating data
app.post("/create", urlEncodedParser, (req, res) => {
    values.push(req.body);
    res.redirect("/");
})

// deleting post
app.post("/delete", urlEncodedParser, (req, res) => {
    let { id } = req.body
    values.splice(id, 1)
    res.redirect("/");
})

app.listen(8000);