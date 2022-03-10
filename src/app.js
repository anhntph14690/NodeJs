// const http = require('http');

const express = require('express');
const cors = require('cors');
import productsRoute from './routes/product';
import morgan from 'morgan';

const app = express();
//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())




//routes
app.use("/api", productsRoute)


//connect
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log("Server của bạn đang chạy cổng ", PORT);
});

