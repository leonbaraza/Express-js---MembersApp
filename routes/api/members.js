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
    // res.redirect('/');
    res.json(members);
    // res.send(req.body);
});

// Update a member
router.put('/:id',(req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        // Get the body
        const updtMember = req.body;
        // Have a loop to check for the member
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updtMember.name ? updtMember.name : member.name;
                member.email = updtMember.email ? updtMember.email : member.email;

                res.json({ msg : 'Member updated', member});
            }
        });
    }else{
        res.status(400).json({msg : `No member with the id of ${req.params.id}`});
    }
});

// Delete a member
router.delete('/:id',(req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json({
            msg : 'Member deleted', 
            members : members.filter(member => member.id !== parseInt(req.params.id))
        });
    }else{
        res.status(400).json({msg : `No member with the id of ${req.params.id}`});
    }
});


module.exports = router; 