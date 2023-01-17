const data = require('./csvjson4.json');
const cityCode = require('./city_code.json');
var fs = require('fs');

console.log(cityCode.DAC);

function airport(params) {
    let arr = [];
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat,i) => {

            if(dat.municipality == "" && dat.city_code!= "" && dat.city_code != undefined && cityCode.hasOwnProperty(dat.city_code)){
                let newObj = dat;
                cc = dat.city_code
                newObj["municipality"]  = cityCode[cc];
                newObj["id"]  = i+1;
                arr.push(newObj);
            }else{
                let newObj = dat;
                newObj["id"]  = i+1;
                arr.push(newObj);
            }
        })
    } else {
        data.map((dat) => {
            if (
                dat.iata_code.toLowerCase().search(params.toLowerCase()) !== -1 
            ) {
                arr.push(dat);
            }
        })
    }
    // fs.writeFile("./csvjson4.json", JSON.stringify(arr), err => {
    //     if (err) console.log("Error writing file:", err);
    //   });
    // return arr;
}
airport('');
module.exports = airport