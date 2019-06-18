import React, { Component } from "react";
import axios from "axios";
import './Converter.css';

export class Converter extends Component {
    state = {
        result: null,
        fromCurrency: "CAD",
        toCurrency: "EUR",
        amount: 1,
        currencies: [],
    };

    componentDidMount() {
        axios
            .get("http://api.openrates.io/latest?base=CAD")
            .then(response => {
                console.log(response);
                const currencyAr = ["CAD"]
                this.setState({ currencies: currencyAr })
            })
            .catch(err => {
                console.log("Olala, ce n'est pas possible", err.message);
            });
    }

    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(`http://api.openrates.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
                .then(response => {
                    const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                    this.setState({ result: result.toFixed(5) })
                })
                .catch(err => {
                    console.log("Hum, c'est tout cassé", err.message);
                });
        } else {
            this.setState({ result: "La money est la même." })
        }
    };

    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

    render() {
        return (
            <div className="Converter">
            <br />
            <br />
                <h2 font-color= 'white'>Convertis ta money, guidoune </h2>
                <div className="Form">
                    <input
                        name="amount"
                        type="text"
                        value={this.state.amount}
                        onChange={event =>
                            this.setState({ amount: event.target.value })
                        }
                    />
                    <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <button onClick={this.convertHandler}>Sweet sweet money</button>
                </div>
                {this.state.result && 
                    <h3>{this.state.result}</h3>
                }
            </div>
        );
    }
}

export default Converter;

