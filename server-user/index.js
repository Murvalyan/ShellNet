const express = require('express');
const mongoose = require('mongoose');
const authRouter =  require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
//         await mongoose.connect(link)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error);
        console.log('blabla')
    }
}

start()

