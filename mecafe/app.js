const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.listen(3030,() => console.log("Servidor escuchando en puerto 3030"));


app.get('/', (req,res) => { 
let html= path.resolve(__dirname,"./views/home.html")
res.sendFile (html);
})

app.get('/header', (req,res) => { 
    let html= path.resolve(__dirname,"./views/header.html")
    res.sendFile (html);
})

app.get('/footer', (req,res) => { 
    let html= path.resolve(__dirname,"./views/footer.html")
    res.sendFile (html);
})

app.get('/login', (req,res) => { 
    let html= path.resolve(__dirname,"./views/login.html")
    res.sendFile (html);
})

app.get('/cart', (req,res) => { 
    let html= path.resolve(__dirname,"./views/cart.html")
    res.sendFile (html);
})

app.get('/register', (req,res) => { 
    let html= path.resolve(__dirname,"./views/register.html")
    res.sendFile (html);
})

app.get('/product', (req,res) => { 
    let html= path.resolve(__dirname,"./views/product.html")
    res.sendFile (html);
})



