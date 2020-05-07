const express = require('express');
const app = express();

const path = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')))
/*
app.get('/',)
app.post('/submit',(req,res)=>{
    res.status(200);
     res.json({success:true});
})
*/

app.listen(3000);
