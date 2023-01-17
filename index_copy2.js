const data = require('./csvjson6.json');
const cityCode = require('./empty_city_name.json');
var fs = require('fs');

// console.log(cityCode);

function airport(params) {
    let arr = [];
    s=0;
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat,i) => {

            if(dat.municipality != ""){
                s = s+1;
                let newObj = dat;
                // cc = dat.city_code
                // cityCode.map((da)=>{
                //     if(da.code == dat.city_code){
                //         newObj["municipality"] = da.city
                //     }
                // });
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
    fs.writeFile("./csvjson7.json", JSON.stringify(arr), err => {
        if (err) console.log("Error writing file:", err);
      });
    console.log(s);
    return arr;
}
airport('');
module.exports = airport