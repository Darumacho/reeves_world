import React from 'react';

export function Webcam() {
  return (
    <React.Fragment>
    <div class="embed-responsive embed-responsive-4by3">
      L'hôtel du Parlement en direct :
        <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=RPeqCov2HDI" allowFullScreen></iframe>
    </div>
    <br />
    <div class="embed-responsive embed-responsive-4by3">
      Le port de Québec en Direct :
        <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=-zaCBS29E30" allowFullScreen></iframe>
    </div>
    </React.Fragment>
  );
}

export default Webcam;