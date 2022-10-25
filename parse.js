const fs = require ('fs');
var json = require('./output.json');
let obj = json.publications
let indicators = [];


function iterateObject(obj) {
    for(prop in obj){
        if(typeof(obj[prop]) == "object"){
            iterateObject(obj[prop]);
        } else {
            if(prop == "type"){
                    indicators.push({
                        type: obj.type,
                        value: obj.value
                    })                    
            }
        }
        
    }
    return indicators
}

function total(){
    var imobj = iterateObject(obj)
    // console.log(imobj)
    let IP = [];
    let MD5 = [];
    let SHA256 = [];
    let SHA1 = [];
    let DOMAIN = [];
    let URL = [];

    indicators.forEach(element => {
        switch(element.type){
            case 'IP':
                IP.push({
                    type: element.type,
                    value: element.value
                })
                break;
            case 'md5':
                MD5.push({
                    type: element.type,
                    value: element.value
                })
                break;
            case 'sha256':
                SHA256.push({
                    type: element.type,
                    value: element.value
                })
                break;
            case 'sha1':
                SHA1.push({
                    type: element.type,
                    value: element.value
                })
            case 'domain':
                DOMAIN.push({
                    type: element.type,
                    value: element.value
                })
                break;
            case 'url':
                URL.push({
                    type: element.type,
                    value: element.value
                })
        }

    });
    return [IP,DOMAIN, SHA1, SHA256,URL];
}
function summary(){ //Function Call by mail Daemon returns Signatures length
    const [IP,DOMAIN, SHA1, SHA256,URL] = total()
    let IPlen = IP.length
    let DOMAINlen = DOMAIN.length
    let SHA1len = SHA1.length
    let SHA256len = SHA256.length
    let URLlen = URL.length
    return {IPlen,DOMAINlen, SHA1len, SHA256len,URLlen, IP,DOMAIN,SHA1,SHA256,URL};
}

function RemoveSpecialChars(){
    const [IP,DOMAIN,SHA1,SHA256,URL] = total()
    console.log(Object.keys(IP))
}

RemoveSpecialChars()

module.exports = {summary};