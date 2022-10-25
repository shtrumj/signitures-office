JSON.filter = require("node-json-filter");


function openJson() {
    const fs = require ('fs');
    var obj = require('./output.json');
    let publication = (obj['publications'])
    return publication;
}

async function parse(){
    const data = await openJson();
    data.forEach(function(fu){
        const indictors = fu['indicators']
        // filtering(indictors)
    })
}
   

parse()