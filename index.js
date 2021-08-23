import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Home page");
});

mongoose.connect(
    process.env.DATABASE_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to database')
);

app.listen(3000, () => console.log("server started on port 3000"));
