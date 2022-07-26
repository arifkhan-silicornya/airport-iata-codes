# airport-iata-codes

Search airport related data by name,iata code and city 


![npm](https://img.shields.io/npm/v/airport-iata-codes)
![npm](https://img.shields.io/npm/l/airport-iata-codes?color=002350)
![npm](https://img.shields.io/bundlephobia/minzip/airport-iata-codes/1.0.1)




#### Install it via npm:

```shell
npm i airport-iata-codes
```

#### Require the Module:
```shell
const allData = require('airport-iata-codes')
```

##### To use
```shell
const data = allData(); // All Data
const data = allData('Dhaka'); // Filter by City Name
const data = allData('Hazrat Shahjalal International Airpor'); // Filter by Airport Name
const data = allData('DAC'); // Filter by iata code

console.log(data);

```


##### Output



```shell
[
  {
    id: 26534,
    ident: 'VGZR',
    type: 'medium_airport',
    name: 'Dhaka / Hazrat Shahjalal International Airport',
    latitude_deg: '23.843347',
    longitude_deg: '90.397783',
    elevation_ft: 30,
    continent: 'AS',
    iso_country: 'BD',
    iso_region: 'BD-3',
    municipality: 'Dhaka',
    scheduled_service: 'yes',
    gps_code: 'VGHS',
    iata_code: 'DAC',
    local_code: '',
    home_link: '',
    wikipedia_link: 'http://en.wikipedia.org/wiki/Zia_International_Airport',
    keywords: 'VGZR, Zia International Airport, Dacca International Airport'
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