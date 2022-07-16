const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const indexRoutes = require('./src/routes/index');
const cartRoutes = require('./src/routes/cart');
const productRoutes = require('./src/routes/product');
const userRoutes = require('./src/routes/user');

app.use('/',indexRoutes);
app.use('/cart',cartRoutes);
app.use('/product',productRoutes);
app.use('/user',userRoutes);

app.listen(3030,() => console.log("Servidor escuchando en puerto 3030"));