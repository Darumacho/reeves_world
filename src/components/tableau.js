import React, { Component } from 'react'
import MaterialTable from 'material-table'

export class Tab extends Component {
  render() {
    return (
      <div className="tabContainer">
        <MaterialTable
          columns={[
            { title: 'Nom', field: 'name' },
            { title: 'Prénom', field: 'surname' },
            { title: 'Âge', field: 'age', type: 'numeric' },
            { title: 'Guidoune', field: 'guidoune', lookup: { 1: 'Oui', 2: 'Non' } },
            { title: 'Métier', field: 'job' }
          ]}
          data={[
              { name: 'Reeves', surname: 'Hubert', age: 86, guidoune: 2, job: 'Astrophysicien' },
              { name: 'Jones', surname: 'Indiana', age: 76, guidoune: 1, job: 'Aventurier' },
              { name: 'Billy', surname: 'P\'tit', age: 8, guidoune: 1, job: 'Gamin' },
              { name: 'Man', surname: 'Guidoune', age: 24, guidoune: 1, job: 'Idiot' },
              ]}
          title="Test"
        />
      </div>
    )
  }
}

export default Tab;
