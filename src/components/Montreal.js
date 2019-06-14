import React from 'react';
import {Meteo} from './Meteo.js';
import {Trafic} from './Trafic.js';
import {Clock} from './Horloge.js';

export function Montreal() {
  return (
    <div>
      <Clock />
      <Meteo />
      <Trafic />

    </div>
  );
}

export default Montreal;

/*https://weather.api.here.com/weather/1.0/report.json
?app_id={YOUR_APP_ID}
&app_code={YOUR_APP_CODE}
&product=alerts
&name=Duluth*/