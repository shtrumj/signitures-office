var ind = require('./flattenJson');
let objects = require('../managment')
// import {Objonjcts} from "../managment"
// var {indicators} = require('../managment')
// let obj = objects.obj


// 


function undup(indicators) {
    indicators = indicators.filter((value, index,self) =>
    index == self.findIndex((t) => (
    t.value === value.value && t.type === value.type
    ))
    )
    return indicators
}
module.exports = {
    undup : undup
}

