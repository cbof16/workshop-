const express = require('express')
const router = express.Router()


router.post('/',(req,res)=>{
    let {testing}= req.body
    if(testing){
        return res.send(`Welcome ${testing}`)
    }
   res.send('Not entered')
})

module.exports = router