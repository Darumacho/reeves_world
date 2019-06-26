import React, { Component } from 'react';
import * as firebase from 'firebase';

import config from '../firestore.js';

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore();

const Base = ({ boys }) => (
  <div>
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

function strToBool(value) {
  if (value && typeof value === 'string') {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
  }
  return value; 
}

export class Test extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            guidoune: false,
            email: "",
            job: "",
            users: [],
            valueSelect: "null"
        };
        this.change = this.change.bind(this);
    }

    componentDidMount() {
      db.collection("boys")
      .get()
      .then(querySnapshot  => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ users: data });
      });
    }

    change(event){
      const select = strToBool(event.target.value);
      
      db.collection("boys")
      .where("guidoune", "==", select)
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
        <div className="contactContainer">
          <select id="guidoune" onChange={this.change} value={this.state.valueSelect}>
            <option value="null"> - </option>
            <option value="true">Guidounes</option>
            <option value="false">Non guidounes</option>
          </select>
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