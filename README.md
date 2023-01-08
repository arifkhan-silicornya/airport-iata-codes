# airport-iata-codes

Search airport related data by iata code 


![npm](https://img.shields.io/npm/v/airport-iata-codes)
![npm](https://img.shields.io/npm/l/airport-iata-codes?color=002350)
![npm](https://img.shields.io/bundlephobia/minzip/airport-iata-codes/1.0.1)




## Install it via npm

```shell
npm i airport-iata-codes
```

## Require the Module

```shell
const allData = require('airport-iata-codes')
```

## To use

```shell
const data = allData(); // All Data
const data = allData('DAC'); // Filter by iata code
const data = allData('dac'); // Filter by iata code

console.log(data);

```

## Output

```shell
[
  {
    iata_code: 'DAC',
    time_zone_id: 'Asia/Dhaka',
    name: 'Hazrat Shahjalal International Airport',
    city_code: 'DAC',
    country_id: 'BD',
    location: 'POINT (90.40375285964708 23.84229135)',
    elevation: 32,
    url: '',
    icao: 'VGHS',
    city: 'Tungi',
    county: '',
    municipality: 'Dhaka',
    id: 2251
  }
]


## Parameters 

## License
The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.