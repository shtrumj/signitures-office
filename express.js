const {Objectify} = require('./parseObj')
const fs = require('fs');
const path = require('path');
let {md5, domains, sha1,sha256, url,ip, fileName} = Objectify()
let MD5Forit = []
let md5Forti1 = md5.map(o => o.value )
let md5Forti2 = md5Forti1.forEach(e=> MD5Forit.push(e.replace(/"/g,'"')))  

let md5Forti= 'MD5.sig'
console.log(MD5Forit.length)
var options = {
    root: path.join(__dirname + "/OutputFiles/Fortinet")
};
console.log(options)

let file = fs.createWriteStream('./OutputFiles/Fortinet/MD5.sig');
file.on('error', function(err){/* test */});
MD5Forit.forEach(function(val){ file.write(val + '\n');})
file.end();

const express = require('express')
const app = express()
const port = 2000

app.get('/fortinet/md5',(req, res) =>{
    console.log(path)
    res.sendFile(md5Forti,options)

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })