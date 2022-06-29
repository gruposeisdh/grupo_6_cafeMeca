const express = require('express');
const app = express();

const path = require('path');

const indexRoutes = require('./src/routes/index');
const cartRoutes = require('./src/routes/cart');
const productRoutes = require('./src/routes/product');
const userRoutes = require('./src/routes/user');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use('/',indexRoutes);
app.use('/cart',cartRoutes);
app.use('/product',productRoutes);
app.use('/user',userRoutes);

app.listen(3030,() => console.log("Servidor escuchando en puerto 3030"));