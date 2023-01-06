import express from "express";
import {authRouter} from "./routes/auth.js"
import {postRouter} from "./routes/posts.js"
import {usersRouter} from "./routes/users.js"
import cookieParser from "cookie-parser"
import "./utils/database.js"

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/users', usersRouter);

app.listen(8800, () => {
    console.log(`Connected on http://127.0.0.1:8800`);
})
