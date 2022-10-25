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

function Objectify(){
    let md5 = []
    let domains = []
    let sha1 =[]
    let sha256 = []
    let ip =[]
    let url =[]
    let fileName=[]
    
    let object = iterateObject(obj)
    class Indicator {
        // Setup the object
        constructor(_type, _value){
            this.type = _type
            this.value = _value 
        }
    }
    for (i=0; i<object.length; i++){
        switch(object[i].type){
            case 'md5':
                let tmpmd5 = new Indicator(object[i].type, object[i].value)
                md5.push(tmpmd5)
                break;
            case 'sha1':
                let tmpsha1 = new Indicator(object[i].type, object[i].value)
                sha1.push(tmpsha1)
                break;
            case 'sha256':
                let tmpsha256 = new Indicator(object[i].type, object[i].value)
                sha256.push(tmpsha256)
                break;
            case 'domain':
                let tmpdomains = new Indicator(object[i].type, (object[i].value).replace(/\[|\]/g, ''))
                domains.push(tmpdomains)
                break;
            case 'url':
                let tmpurl = new Indicator(object[i].type, ((object[i].value).replace(/\xx/g, 'tt')).replace(/\[|\]/g, ''))
                url.push(tmpurl)
                break;
            case 'IP':
                let tmpip = new Indicator(object[i].type, (object[i].value).replace(/\[|\]/g, ''))
                ip.push(tmpip)
                break;
            case 'fileName':
                let tmpfileName = new Indicator(object[i].type, object[i].value)
                fileName.push(tmpfileName)
            

        }
        
    }
    return {md5, domains, sha1,sha256, url,ip,fileName}
    function test(){
        console.log("test URL #5>" + url[5].value)
        console.log("test IP #5>" + ip[5].value)
        console.log("test Domain #5>" + domains[5].value)
        console.log("test MD5 #5>" + md5[5].value)
        console.log("test SHA1 #5>" + sha1[5].value)
        console.log("test SHA256 #5>" + sha256[5].value)
        console.log("test  fileName #5>" + fileName[5].value)

    }
}
    

    

    


let {md5, domains, sha1,sha256, url,ip, fileName} = Objectify()
console.log(md5.length + domains.length + sha1.length + sha256.length + url.length + ip.length + fileName.length)