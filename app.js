const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const items = ["Buy Food", "Cook food", "Eat food"];
const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/", function (req, res) {
    let day = date.getDate();
    res.render('list', { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    var item = req.body;
    if (item.list === "work") {
        workItems.push(item.newItem);
        res.redirect("/work");

    } else {
        items.push(item.newItem);
        res.redirect("/");

    }


});

app.get("/work", function (req, res) {

    res.render('list', { listTitle: "work List", newListItems: workItems });
});
app.post("/work", function (req, res) {

    var item = req.body;
    workItems.push(item.newItem);

    redirect("/work");
});

app.get("/about", function (req, res) {
    res.render('about');
});



app.listen(3000, function () {
    console.log("Server started on port 300");

})