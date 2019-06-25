import React, { Component } from 'react';
import * as firebase from 'firebase';

import config from '../firestore.js';

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore();

const Base = ({ boys }) => (
  <div>
  {console.log('guidoune')}
  {boys.map(boy => (
    <div className="contact" key={boy.name}>
    <img class="rounded-circle" src={boy.pic} alt="image" width="140" height="140"/>
     {boy.name}
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
        <div class="contactContainer">
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