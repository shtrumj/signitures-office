const express = require('express')
const app = express()
const port = 2000

app.get('/md5',(req, res) =>{
    res.send('hello word!')

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })