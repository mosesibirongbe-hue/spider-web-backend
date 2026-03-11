const authRouter = require('./routers/authRouter.js');
const authRouter = require('./routers/platformsRouter.js');
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

// mongoose
//     .connect(process.env.MONGO_URL).then(() => {
//         console.log('database connected')
//     }).catch(err => {
//         console.log(err);
//     });

app.use('/api/auth', authRouter)
app.use('/api/platforms', platformsRouter);
app.get('/', (req, res) => {
    res.json({ message: "Hello from the Spider Web's Backend" });
})

app.listen(process.env.PORT, () => {
    console.log('listening...')
});

console.log('Hello');