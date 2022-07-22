const data = require('./airport_iata_min.json');

let arr = [];

function airport(params) {
    data.map((dat) => {
        if (dat.name.toLowerCase().search(params.toLowerCase()) !== -1 || dat.iata_code.toLowerCase().search(params.toLowerCase()) !== -1 || dat.municipality.toLowerCase().search(params.toLowerCase()) !== -1) {
            arr.push(dat);
        }
        return arr;
    })
    return arr
}

module.exports = airport