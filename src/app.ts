import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', (req, res) => {res.status(200).send('My backend is running on port 4000')})

export default app;