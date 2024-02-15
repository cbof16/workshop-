let {people} = require('../data.js')

const getPeople  =  (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const putpeople = (req,res)=>{
    const {id} = req.params
    const {name}=req.body
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:`no one with ${id}`})
    }
   const newPeople = people.map((person)=>{
    if(person.id===Number(id)){
        person.name=name
    }
    return person
   })
   res.status(200).json({success:true,data:newPeople})
}

const postpostman = (req,res)=>{
    let {name} = req.body
    if(!name){
        return res.status(404).json({success:false,msg:' enter something'})
    }
    res.status(201).json({success:true,data:[...people,name]})
}

const postpeople = (req,res)=>{
    let {name} = req.body
    if(!name){
        return res.status(404).json({success:false,msg:' enter something'})
    }
    res.status(201).json({success:true,person:name})
}


const deletepeople= (req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id = Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:'no such entry exist'})
    }
    const DeletedPeople = people.filter((person)=>person.id !== Number(id))
    res.status(200).json({success:true,data:DeletedPeople})

}
module.exports = {getPeople,postpeople,postpostman,putpeople,deletepeople}