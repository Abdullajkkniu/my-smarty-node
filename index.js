const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser = require('body-parser');

app.use(cors());
// app.use(bodyParser.json())
app.use(express.json());

// req.body jokhon undefined dekhay tokhon nicher line ta likhle solve hoye jay


app.get('/', (req,res)=>{
    res.send('hello from my smarty node !!')
});
const users = [
    {id:1, name:'sabana', email:'sabana@gmail.com', phone:01717171717},
    {id:2, name:'shabnoor', email:'shabnoor@gmail.com', phone:01717171717},
    {id:3, name:'sohana', email:'sohana@gmail.com', phone:01717171717},
    {id:4, name:'sabila', email:'sabila@gmail.com', phone:01717171717},
    {id:5, name:'sokina', email:'sokina@gmail.com', phone:01717171717},
    {id:6, name:'srabonti', email:'srabonti@gmail.com', phone:01717171717},
]
app.get('/users',(req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user =>user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
    
});

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u =>u.id === id);
    res.send(user);
});

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits',(req, res)=>{
    res.send(['mango','apple','oranges'])
});
app.get('/fruits/mango/fazle',(req, res)=>{
    res.send('sour sour fazle flavor');
})
app.listen(port, ()=>{
    console.log('Listening to port', port)
})