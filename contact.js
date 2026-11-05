import express from 'express';import Message from '../models/Message.js';
const router=express.Router();
router.post('/',async(req,res)=>{try{const{name,email,message}=req.body;if(!name||!email||!message)return res.status(400).json({message:'Name, email and message are required.'});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return res.status(400).json({message:'Enter a valid email address.'});await Message.create({name,email,message});res.status(201).json({message:'Message saved successfully.'});}catch(e){res.status(500).json({message:'Server error while saving message.'});}});
export default router;
