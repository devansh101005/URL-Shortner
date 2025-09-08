import express from 'express';
import {db} from '../db/index.js';
import{usersTable} from '../models/index.js';
import {eq} from 'drizzle-orm';
import {randomBytes } from 'crypto';
const router =express.Router();

router.post('/signup',async (req,res) => {
    const { firstname,lastname,email,password} =req.body;

    const [existingUser]=await db 
    .select({
        id:usersTable.id,
    })
    .from(usersTable)
    .where(eq(usersTable.email,email))

    if(existingUser)
        return res.status(400)
    .json({error:`User with email4{email} already exist`});

    const user =await 

    if(!firstname)
        return res.status(400).json({error:'firstname is required'})
})

export default router;