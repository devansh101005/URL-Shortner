import express from 'express'
import {authenticationMiddleware} from './middlewares/auth.middleware.js'

import userRouter from './routes/user.routes.js'

const app =express()
const PORT =process.env.PORT ?? 8000

app.use(express.json());
app.use(authenticationMiddleware);

app.get('/',(req,res)=> {
    return res.json({status:'Server is running'})
});

app.use('/user',userRouter);

app.listen(PORT ,() => {
    console.log(`The server is running on PORT ${PORT} `);

})