const express = require('express')
const path=require('path')
let PORT = 1234;

const app = express()
app.use('/', express.static(path.join(__dirname ,'static')))


app.listen(PORT, () => {
    console.log(`Server Listening in PORT `, PORT)
})
// console.log(path.join(__dirname))