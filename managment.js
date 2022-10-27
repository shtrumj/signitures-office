const {fetch} = require('./utils/Fetch')
const fs = require ('fs');
var ind = require('./utils/flattenJson');
var json = require('./utils/RAW/output.json');
const { indi } = require('./utils/flattenJson');
let obj = json.publications
let indicators = ind.flatten(obj)
let {undup} = require('./utils/removeDuplicates')
let clean = undup(indicators)
let {Objectify} = require('./utils/parseObj')
let [md5, domains, sha1,sha256, url,ip,fileName] = Objectify(clean)
let [Total] =[md5.length + domains.length + sha1.length + sha256.length + url.length + ip.length + fileName.length] 
// console.log("Total un-Duplicated signatures :"  +Total  )
console.log(md5[1].value)

module.exports = {
    obj : obj,
    indicators : indicators
}


