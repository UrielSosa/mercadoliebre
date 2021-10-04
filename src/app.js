const express = require('express');
const app = express();
const path = require('path');

/* Config express */
app.use(express.static(path.resolve(__dirname, '../public')));

/* Routes */
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.listen(process.env.PORT || 3000, () => console.log('Servidor funcionando'));