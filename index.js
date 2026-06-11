import express from "express"
const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/',(req,resp)=>{
    return resp.json({msg:"hello form the server i fuck you"})
})

app.listen(PORT , ()=>{
    console.log(`server is up and running on port ${PORT}`)
})