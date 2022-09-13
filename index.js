const data = require('./airport_iata_min.json');



function airport(params) {
    let arr = [];
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat) => {
            arr.push(dat);
        })
    } else {
        data.map((dat) => {
            if (
                dat.name.toLowerCase().search(params) !== -1 ||
                dat.iata_code.toLowerCase().search(params) !== -1 ||
                dat.municipality.toLowerCase().search(params) !== -1
            ) {
                arr.push(dat);
            }
        })
    }
    return arr;
}
module.exports = airport