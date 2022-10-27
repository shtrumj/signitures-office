var json = require('./RAW/output.json');
let obj = json.publications
let indicators = []
 function flatten(obj) {
    for(prop in obj){
        if(typeof(obj[prop]) == "object"){
            flatten(obj[prop]);
        } else {
            if(prop == "type"){
                    indicators.push({
                        type: obj.type,
                        value: obj.value
                        
                    })
                    // return indicators
                }
                                     
            }
            // return indicators
        }
        return indicators;
    }
    // return indicators;


let indi =flatten(obj)

// indicators= flatten(obj)
// console.log(indicators)
module.exports ={flatten : flatten,
                 indi : indi}