var axios = require('axios');
const fs = require('fs')

const url = 'https://cybernet.cyber.gov.il/api/rest/getIndicators?fromDate=2010-10-10_00%3A00%3A00';
const apiKey = '1E804161881901AB';
const userName = 'soc_trot';

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
  



  function save2file(jsonify){
    fs.writeFile("output.json", jsonify, 'utf8',function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
     
        console.log("JSON file has been saved.");
    });
}
