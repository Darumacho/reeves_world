import React, { Component } from 'react';
import * as firebase from 'firebase';

import config from '../firestore.js';

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore();

const Base = ({ boys }) => (
  <div>
  {console.log('guidoune')}
  {boys.map(boy => (
    <div className="meteo" key={boy.name}>
    Nom : {boy.name}
    <br />
    Guidoune : {boy.guidoune ? 'oui' : 'non'}
    <br />
    Job : {boy.job}
    <br />
    Email : {boy.email}
    </div>  
  ))}
  </div> 
);

export class Test extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            guidoune: false,
            email: "",
            job: "",
            users: []
        };
    }

    componentDidMount() {
      db.collection("boys")
        .get()
        .then(querySnapshot  => {
          const data = querySnapshot.docs.map(doc => doc.data());
          this.setState({ users: data });
          console.log(this.state.users)
        });
    }

    render() {
      const check = this.state.users
        return (
        <div>
        {check ? (
          <Base boys = {check} />
        ) : (
          <React.Fragment>Chargement</React.Fragment>
        )}
        </div>
            );
          }

}

export default Test;