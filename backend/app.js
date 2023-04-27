const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
// const {readdirSync} = require('fs');
const transactionRoutes = require('./routes/transactions')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 6000;

//middleware
app.use(express.json());
app.use(cors());

// either this way or
app.use('/api/v1/', transactionRoutes);

app.get('/', async(req, res) => {
    res.send('server is running');
})

// this way
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/'+route)))

const server = () => {
    db();
    app.listen(PORT, (req, res)=> console.log(`You're listening on: http://localhost:${PORT}`));
}

server();