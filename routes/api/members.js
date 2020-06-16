const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Gets all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id',(req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg : `No member with the id of ${req.params.id}`});
    }
});

// Create member
router.post('/', (req, res) => {
    // Receive the details
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : 'active'
    }
    // Check is their is a member
    if(!newMember.name || !newMember.email){
        res.status(400).json({msg : 'Name and Email are required. '})
    }
    members.push(newMember);
    res.json(members);
    // res.send(req.body);
});

module.exports = router; 