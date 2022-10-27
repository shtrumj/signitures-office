const { exit } = require('process');

function fetch(){
    var axios = require('axios');
    var config = {
        method: 'get',
        url: 'https://cybernet.cyber.gov.il/api/rest/getIndicators?fromDate=2010-10-10_00:00:00',
        headers: { 
        'CN-USER-NAME': ' soc_trot', 
        'X-API-KEY': '1E804161881901AB'
        }
    };
    
    axios(config)
    .then(function (response) {
        let jsonify = (JSON.stringify(response.data));
        save2file(jsonify)
    })
    .catch(function (error) {
        console.log(error);
    });
}


function save2file(jsonify){
    const fs = require('fs');
    const path = require('path');
    const fileName = 'output.json'
    const FullName = path.join( __dirname,'RAW',fileName)
    // console.log(FullName)
    fs.writeFile(FullName, jsonify, 'utf8',function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        
        console.log(`JSON file has been saved at ${FullName}`);
    });
}

module.exports = {fetch}