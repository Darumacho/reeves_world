import React from 'react';
import {Meteo} from './Meteo.js';
import {Trafic} from './Trafic.js';
import {Clock} from './Horloge.js';
import {Converter} from './Converter.js';
import {Dollar} from './Dollar.js';

export function Montreal() {
  return (
    <div>
      <Clock />
      <Meteo />
      <Trafic />
      <Converter />
      <Dollar />
    </div>
  );
}

export default Montreal;