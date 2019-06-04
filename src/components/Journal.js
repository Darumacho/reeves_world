import React from 'react';

export class Journal extends React.Component {
  render() {
      return (
        <div className="journalContainer">
        <div className="journal">
        <React.Fragment>     
<div class="blog-header">
      <div class="container">
        <h1 class="blog-title">Journal de bord</h1>
        <p class="lead blog-description">Un condensé de découvertes au fil des jours</p>
      </div>
    </div>
    </React.Fragment>
<React.Fragment>
    <div class="container">

      <div class="row">

        <div class="col-sm-8 blog-main">

          <div class="blog-post">
            <h2 class="blog-post-title">Guidoune de minuit</h2>
            <p class="blog-post-meta">4 juin 2019 par <a href="https://fr.wikipedia.org/wiki/Hubert_Reeves">Hubert</a></p>
            <p><img src="img/hubert.png" alt="sauce"/></p>

            <p>Alors que je me baladais lors de ma promenade habituelle des premières heures de la journée, je m'attendais à un silence nocturne harmonieux sans aucune disruption sonore.</p>
            <p>À ma grande surprise, j'entendis des feuilles craquer et des fourrés s'agiter, n'ayant comme seul réflexe qu'un bref mais dissuasif : 
            </p>
            <p><strong>"Arrête boy"</strong></p>
            <blockquote>
              <p>Cependant, ce n'était pas un boy au pelage soyeux et à la papille goûtue : c'était une guidoune nyctalope.</p>
            </blockquote>
            <p>Ce type de guidoune, encore jamais rencontré, avait été prédit par <em>mes calculs d'astrophysicien</em> - en l'observant avec attention et suspicion, j'ai pu en conclure plusieurs choses :</p>
            <li>1. Les guidounes nyctalopes voient bien pendant la nuit</li>
            <li>2. Le soleil se lève après minuit</li>
            <li>3. Ta maman pèse 500kg</li>
            
            <h2>Heading</h2>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre><code>Example code block</code></pre>
            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          </div>

          <div class="blog-post">
            <h2 class="blog-post-title">Sauce pour les pâtes</h2>
            <p class="blog-post-meta">31 mai 2019 par <a href="https://fr.wikipedia.org/wiki/Gordon_Ramsay">Gordon</a></p>
            <p><img src="img/gordon.png" alt="sauce"/></p>

            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            
            <blockquote>
              <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>
          
          <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Haut de page</a>
          </nav>

        </div>

        <div class="col-sm-3 offset-sm-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>À propos</h4>
            <p>Espèce de guidoune, tu estimes nécessaire le fait de me présenter une fois de plus. Cependant, extrais ton cérumen oculaire, car la galaxie entière sait qui j'suis, boy.</p>
          </div>
          <div class="sidebar-module">
            <h4>Autres</h4>
            <ol class="list-unstyled">
              <li><a href="https://fr.wikipedia.org/wiki/Hubert_Reeves">Ma vie</a></li>
              <li><a href="https://www.hubertreeves.info/">Mon vrai site</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>

      </div>
      </div>
      </React.Fragment>
      </div>
      </div>
      );
  }
}

export default Journal;