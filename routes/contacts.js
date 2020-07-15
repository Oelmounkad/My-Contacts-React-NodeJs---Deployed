const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Contact = require('../models/Contact')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
const { request } = require('express')


// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth , async (req,res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}) // most recent
        res.json(contacts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/',[auth, [
    check('name','Name is required').not().isEmpty()
]],async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
    }

    const {name,email,phone,type} = req.body 
    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
           user: req.user.id
        })

        const contact = await newContact.save()
        res.json(contact)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server errr')
    }
})

// @route   put api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth , async (req,res) => {
    const {name,email,phone,type} = req.body 

    // Build a contact object
    const contactFields = {}
    if(name) contactFields.name = name
    if(email) contactFields.email = email
    if(phone) contactFields.phone = phone
    if(type) contactFields.type = type

    try {
        let contact = await Contact.findById(req.params.id) 
        
        if(!contact) return res.status(404).json({msg: 'Contact is not found !'})
    
        // Make sure user owns contact
        if(contact.user.toString() != req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }
        contact = await Contact.findByIdAndUpdate(req.params.id,
            {$set : contactFields},
            {new: true})
            res.json(contact)
       

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server errr')
    }
})


// @route   DELETE api/contacts/:id
// @desc    Add new contact
// @access  Private
router.delete('/:id',auth , async (req,res) => {
    try {
        let contact = await Contact.findById(req.params.id) 
        
        if(!contact) return res.status(404).json({msg: 'Contact is not found !'})
    
        // Make sure user owns contact
        if(contact.user.toString() != req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }
        await Contact.findByIdAndRemove(req.params.id)
        res.json({msg: 'contact deleted'})
       

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server errr')
    }
})


module.exports = router