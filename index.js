const express = require("express");
const app = express();
app.use(express.json());
const { MongoClient } = require("mongodb");
const port = 3000;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ElevatorDB";

const connecto = async () => {
    await client.connect();
};
connecto();
const db = client.db(dbName);
const collection = db.collection("elevatorLogs");

app.post("/elevatorLog", async (req, res) => {
    await collection.insertOne({ elevatorName: "elevatorOne", floor: 5 });
    res.send("Hello Worldu!");
});

app.all("*", (req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
