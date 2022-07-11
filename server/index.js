const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const verifyJWT = require('./src/middlewares/verifyJWT.js');
const bodyParser = require('body-parser');
dotenv.config({ path: "./src/config/.env"});

const userRouter = require("./src/routes/user.js");
const PORT = process.env.PORT || 3001
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/user', userRouter);
app.get('/verify-token', verifyJWT);

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}!`));