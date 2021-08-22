'use strict';

const express = require('express');
const errorHandller=require('./error-handler/500');
const pageNotFound=require('./error-handler/404');


const app = express();
const {basicAuth,middleSignUp }=require('./auth/auth.middleware')
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.post('/signup',middleSignUp ,(req, res, next) => {
  
    res.status(201).json(req.record);

});


app.post('/signin', basicAuth, (req, res, next)=> {

 res.status(200).json({username: req.username ,id :req.user.id})
    
});


app.use('*',pageNotFound)
app.use(errorHandller)



module.exports={
    app 
    
    
}