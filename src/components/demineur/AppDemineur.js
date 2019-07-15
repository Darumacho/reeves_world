import "./demineur.css";

import React from 'react';
import { render } from 'react-dom';
import Minesweeper from "./demineur.js";

export class AppDemineur extends React.Component {
    state = {
        msg: "Dépoutineur",
        minesweeperKey: 0,
        bombChance: 15,
        width: 10,
        height: 10
    };
    onWin = () => {
        this.setState({
            msg: "Gagné !"
        });
    };
    onLose = () => {
        this.setState({
            msg: "Perdu !",
        });
    };
    restartMinesweeper = () => {
        this.setState(prevState => ({
            minesweeperKey: prevState.minesweeperKey + 1,
            msg: "Dépoutineur"
        }));
    };
    updateStateProp = (prop) => (e) => {
        const value = Number(e.target.value);
        this.setState(prevState => {
            prevState[prop] = value;
            prevState.minesweeperKey += 1;
            return prevState;
        });
    };
    render() {
        const { msg, minesweeperKey, bombChance, height, width } = this.state;

        return (
            <React.Fragment>
                <div className="container">
                <div className="minesweeper__header">
                        <p>Ce dépoutineur est entièrement personnalisable - si jamais tu sens que tu fais n'importe quoi, clique sur Guidoune Man pour tout réinitialiser.</p>
                        <br />
                        <br />
                        <h1 font-size="16px"><u>{msg}</u></h1>
                    </div>
                    <div>
                        <button className="minesweeper__restart" onClick={this.restartMinesweeper}><img src="img/GuidouneMan2.png" width="40%" height="40%" /></button>
                    </div>
                    <Minesweeper
                        key={minesweeperKey}
                        onWin={this.onWin}
                        onLose={this.onLose}
                        bombChance={bombChance / 100}
                        width={width}
                        height={height}
                    />

                    <div className="minesweeper__options">
                        <div>
                            <label htmlFor="bomb-chance">Taux de poutine (0-100%): </label>
                            <input onChange={this.updateStateProp("bombChance")} id="bomb-chance" type="number" max="100" min="0" defaultValue={bombChance} />
                        </div>

                        <div>
                            <label htmlFor="fields-horizontally">Taille lignes : </label>
                            <input onChange={this.updateStateProp("width")} id="fields-horizontally" type="number" defaultValue={width} />
                        </div>

                        <div>
                            <label htmlFor="fields-vertically">Taille colonnes : </label>
                            <input onChange={this.updateStateProp("height")} id="fields-vertically" type="number" defaultValue={height} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AppDemineur;