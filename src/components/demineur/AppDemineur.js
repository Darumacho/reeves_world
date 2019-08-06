import "./demineur.css";

import React from 'react';
import Minesweeper from "./demineur.js";

export class AppDemineur extends React.Component {   
    constructor(props) {
        super(props);
        this.url = "sound/win.mp3";
        this.urlLose = "sound/lose.mp3";
        this.audio = new Audio(this.url);
        this.lose = new Audio(this.urlLose);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
    
    state = {
        msg: "Dépoutineur",
        minesweeperKey: 0,
        bombChance: 15,
        width: 10,
        height: 10,
    };

    play(){
        this.setState({
          play: true,
          pause: false
        });
        console.log(this.audio);
        this.audio.play();
      }
    
      pause(){
      this.setState({ play: false, pause: true });
        this.audio.pause();
      }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
          });
    }

    togglePlayLose = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.lose.play() : this.lose.pause();
          });
    }

    onWin = () => {
        this.setState({
            msg: "Bien joué guidoune !",
        });
        this.togglePlay();
    };
    onLose = () => {
        this.setState({
            msg: "Tu t'es fait poutiner on dirait",
        });
        this.togglePlayLose();
    };
    restartMinesweeper = () => {
        this.setState(prevState => ({
            minesweeperKey: prevState.minesweeperKey + 1,
            msg: "Partie en cours",
        }));
        
        this.togglePlay();
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
                        <p>Sur ce site, ce sont les poutines qui te consomment.</p>
                        <p>Ce dépoutineur est entièrement personnalisable : tu peux régler la taille de la grille et le taux d'apparition des poutines.</p>
                        <p>Si jamais tu sens que tu fais n'importe quoi, clique sur Guidoune Man pour tout réinitialiser.</p>
                        <h1 fontSize="16px"><u>{msg}</u></h1>
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