'use strict'

require('dotenv').config()
const {app }=require('./src/server')
const {db }=require('./src/models/index')

const PORT=process.env.PORT
db.sync().then(()=>{
    app.listen(PORT, ()=> console.log('running on ', PORT))
}).catch( (e)=> {
    console.error(e)
});