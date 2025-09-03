import express from 'express'

const app =express()
const PORT =process.env.PORT ?? 8000

app.get('/',(req,res)=> {
    return res.json({status:'Server is running'})
});

app.listen(PORT ,() => {
    console.log(`The server is running on PORT ${PORT} `);

})