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
    extra_obj = {"iata_code":"ZVJ","time_zone_id":"Asia/Dubai","name":"EK Bus Station Airport","city_code":"AUH","country_id":"AE","location":"POINT (124.432972 54.651138)","elevation":62,"url":"","icao":"","city":"Abu Dhabi","county":"United Arab Emirates","municipality":"Abu Dhabi,Dubai","id":9766}
    arr.push(extra_obj);
    return arr;

    
}
console.log(airport("daC"));
module.exports = airport