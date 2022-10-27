//this file will return the un duplicated object by type

function Objectify(clean){
    let indicators = clean
    // console.log(indicators)
    let md5 = []
    let domains = []
    let sha1 =[]
    let sha256 = []
    let ip =[]
    let url =[]
    let fileName=[]
    class Indicator {
        constructor(_type, _value){
            this.type = _type
            this.value = _value 
        }
    }
    for (i=0; i<indicators.length; i++){
        switch(indicators[i].type){
            case 'md5':
                let tmpmd5 = new Indicator(indicators[i].type, indicators[i].value)
                md5.push(tmpmd5)
                break;
            case 'sha1':
                let tmpsha1 = new Indicator(indicators[i].type, indicators[i].value)
                sha1.push(tmpsha1)
                break;
            case 'sha256':
                let tmpsha256 = new Indicator(indicators[i].type, indicators[i].value)
                sha256.push(tmpsha256)
                break;
            case 'domain':
                let tmpdomains = new Indicator(indicators[i].type, (indicators[i].value).replace(/\[|\]/g, ''))
                domains.push(tmpdomains)
                break;
            case 'url':
                let tmpurl = new Indicator(indicators[i].type, ((indicators[i].value).replace(/\xx/g, 'tt')).replace(/\[|\]/g, ''))
                url.push(tmpurl)
                break;
            case 'IP':
                let tmpip = new Indicator(indicators[i].type, (indicators[i].value).replace(/\[|\]/g, ''))
                ip.push(tmpip)
                break;
            case 'fileName':
                let tmpfileName = new Indicator(indicators[i].type, indicators[i].value)
                fileName.push(tmpfileName)
            

        }

    }

    return [md5, domains, sha1,sha256, url,ip,fileName]

}
// let [md5, domains, sha1,sha256, url,ip,fileName] =Objectify(clean)

// console.log(md5)
module.exports = {Objectify: Objectify};
 

    

    


// let {md5, domains, sha1,sha256, url,ip, fileName} = Objectify()
// console.log(md5.length + domains.length + sha1.length + sha256.length + url.length + ip.length + fileName.length)


// module.exports = {Objectify};
