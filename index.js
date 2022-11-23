const data = require('./AirportIaTaCode.json');



function airport(params) {
    let arr = [];
    if (params === "undefined" || params === undefined || params === "") {
        data.map((dat) => {
            arr.push(dat);
        })
    } else {
        data.map((dat) => {
            if (
                dat.name.toLowerCase().search(params.toLowerCase()) !== -1 ||
                dat.iata_code.toLowerCase().search(params.toLowerCase()) !== -1 ||
                dat.country.toLowerCase().search(params.toLowerCase()) !== -1
            ) {
                arr.push(dat);
            }
        })
    }
    return arr;
}
console.log(airport("daC"));
module.exports = airport