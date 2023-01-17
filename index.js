<<<<<<< HEAD
const data = require('./csvjson8.json');
=======
const data = require('./airport_ver_6.json');


>>>>>>> refs/remotes/origin/main

function airport(params) {
    let arr = [];
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat) => {
            arr.push(dat);
        })
    } else {
        data.map((dat) => {
<<<<<<< HEAD
            if (dat.iata_code.toLowerCase().search(params.toLowerCase()) !== -1) {
=======
            if (
                dat.iata_code.toLowerCase().search(params.toLowerCase()) !== -1 
            ) {
>>>>>>> refs/remotes/origin/main
                arr.push(dat);
            }
        })
    }
    return arr;   
}
module.exports = airport