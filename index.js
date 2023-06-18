// const express = require('express');
// const cors = require("cors");
// const app = express()

// app.use(cors())

// app.get('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })

// app.listen(process.env.PORT || 8080, () => console.log("server is listening on"))

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 8000

server.use(middlewares)
server.use(router)
server.get("/", (req,res)=>{
  res.send("server working");
  });
server.listen(PORT, () => {
  console.log('JSON Server is running on 8080')
})