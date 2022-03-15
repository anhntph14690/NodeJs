// const http = require('http');

const express = require('express');
const cors = require('cors');
import productsRoute from './routes/product';
import morgan from 'morgan';
import mongoose from 'mongoose';


const app = express();
//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())




//routes
app.use("/api", productsRoute)

// connection db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong!"))
    .catch(error => console.log(error))


//connect
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});

