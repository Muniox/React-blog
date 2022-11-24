import express from "express";

const app = express();

app.use(express.json());

app.listen(8800, () => {
    console.log(`Connected on http://127.0.0.1:8800`);
})
