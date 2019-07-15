import React from 'react';
import {Meteo} from './Meteo.js';
import {Trafic} from './Trafic.js';
import {Clock} from './Horloge.js';
import {Converter} from './Converter.js';
import {Webcam} from './unused/Webcam.js/index.js';

export function Montreal() {
  return (
    <div>
      <Clock />
      <Meteo />
      <Trafic />
      <Converter />
    </div>
  );
}

export default Montreal;