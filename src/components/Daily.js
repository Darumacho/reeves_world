import React from 'react';

export class Daily extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pics: [],
        };
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=1')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results} className="guidoune">
                    <font size="28">Et la guidoune du jour est :</font> <br /><br />
                    <u>{pic.name.first} {pic.name.last}</u>
                    <br />
                    <br />
                        <img src={pic.picture.large} alt="guidoune"/>
                    <br />
                    <br />
                    qui nous vient de <i><u>{pic.location.city}</u></i> !
                    <br />
                    <br />
                    Bravo {pic.name.first}, t'es vraiment une guidoune !
                    </div>
                )
            })
            this.setState({pictures: pictures});
        })
    }

    render() {
        return(
            <div className="guidouneContainer">
                {this.state.pictures}
            </div>
        )
    }
}

export default Daily;