import React from 'react';

export function Meteo() {
  return (
    <div>
        <div class="card card-shadow">
            <div class="card-header card-header-transparent cover overlay">
              <img class="cover-image h-200" src="https://www.quebecoriginal.com/fiche/images/800x600/a9362da9-0eac-492a-a83d-22d6aba177e0/tourisme-montreal-office-des-congres-et-du-tourisme-du-grand-montreal-octgm-montreal.jpg" alt="..."/>
              <div class="overlay-panel overlay-background">
                <div class="font-size-16 float-right"><i class="icon wb-map" aria-hidden="true"></i></div>
                <p class="font-size-20">Montréal, CANADA</p>
                <p class="font-size-20">
                  <i class="wi-day-cloudy mr-15 font-size-40"></i>
                  <span class="font-size-40 blue-600">20°
                    <span class="font-size-30">C</span>
                  </span>
                  <span>/</span>
                  <span>7°
                    <span class="font-size-16">C</span>
                  </span>
                </p>
                <p class="mb-5">Vendredi</p>
                <p>31.05.2019</p>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Meteo;