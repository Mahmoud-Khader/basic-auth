'use strict' 


const {Users}=require('../models/index')
const bcrypt = require('bcrypt');
const base64 = require('base-64');


const middleSignUp =async (req,res,next)=>{
    

        console.log('its work ')
        // try{
        const valid = await Users.findOne({ where: { username: req.body.username } });
        if(!valid) {
            //  req.body.password = await bcrypt.hash(req.body.password, 10);
          const record = await Users.create({
            username : req.body.username,
            password : req.body.password,
          });
          res.status(200).json(record);
          next();
        } else {
          next('already exist');
        }
    //   } catch (e) {
    //     console.log(e);
    //     next('invalid')
    
    // }
   
}


const basicAuth =async (req,res,next)=>{

    if (req.headers['authorization']) {
        let basicHeaderParts = req.headers.authorization.split(' '); 
        let encoded = basicHeaderParts.pop();
        let decoded = base64.decode(encoded); 
        let [username, password] = decoded.split(":"); 
        req.username=username
       
    //    try {
      
           const user = await Users.findOne({ where: {username: req.username} });
           const valid = await bcrypt.compare(password, user.password);
           req.user=user
            if (valid) {
         
                next();
                
            } 
            else {
              
                next('Invalid UserName and Password')
            }
    //    } catch(e) {
    //        console.log(e)
    //     next('error in signin')
      
    //    }
    }
}

module.exports={middleSignUp,
                basicAuth}