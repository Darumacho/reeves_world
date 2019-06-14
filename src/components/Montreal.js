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
