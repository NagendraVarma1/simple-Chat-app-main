const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./Routes/login')
const homeRoutes = require('./Routes/home')

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoutes);
app.use(homeRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000)

