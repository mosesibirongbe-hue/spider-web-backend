require('dotenv').config();
const authRouter = require('./routers/authRouter.js');
const platformsRouter = require('./routers/platformsRouter.js');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // our app is extended with the url encoded data

console.log(process.env.MONGO_URL)

mongoose
    .connect(process.env.MONGO_URL).then(() => {
        console.log('database connected')
    }).catch(err => {
        console.log(err);
    });

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/platforms', platformsRouter);
app.get('/api/v1/', (req, res) => {
    res.json({ message: "Hello from the Spider Web's Backend" });
})

app.listen(process.env.PORT || 8000, () => {
    console.log('listening...')
});

console.log('Hello');