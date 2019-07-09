import React from 'react';
import quizQuestions from './quizQuestions.js';
import Quiz from './Quiz.js';
import Result from './Result.js';

export class AppQuestion extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          answer: '',
          answersCount: {},
          result: '',
          desc: '',
          title: '',
          statut: '',
          famous: '',
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
      }

      componentDidMount() {
        const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  
      
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: shuffledAnswerOptions[0]
        });
      }

      shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      };

      setUserAnswer(answer) {
        this.setState((state) => ({
          answersCount: {
            ...state.answersCount,
            [answer]: (state.answersCount[answer] || 0) + 1
          },
          answer: answer
        }));
      }

      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
      }

      handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
          } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
          }
      }

      getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
      
        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
      }

      setResults (result) {
        if (result.length === 1) {
          this.setState({ result: result[0] });
          switch(true){
            case (this.state.result == "1"):
                this.setState({ desc: "comme ton nom le laisse penser, tu es en bas de l'échelle alimentaire, succombant à la moindre dose de force et de bon sens s'opposant à toi. Tu utilises tes supposés talents pour éclairer ta vie pathétique, et tu penses que tu n'as aucun défaut, qu'on peut pourtant compter par centaines, comme tes chromosomes. Les gens te seront cependant reconnaissants de ne pas gâcher leur bon oxygène à déblatérer des idioties à longueur de journée. Gros coeur sur toi, même si ton cas est des plus désespérés.", 
                                title: "une grosse guidoune",                
                                statut:'Guidounes' , 
                                famous: "Justin Bieber, Kim Kardashian, Emmanuel Macron, ta maman, Nicki Minaj, Florentin"});
                break;

            case (this.state.result == "2"):
                this.setState({ desc: "il semblerait que tes méthodes exotiques  et ta relation avec la nature soient endémiques à une lointaine contrée, probablement isolée de toute civilisation moderne. Tu es un concentré d'inattendu et tu peux facilement faire peur aux chiens. Les us et coutumes québecoises restent encore à acquérir, mais tu restes trop attaché à tes racines tropicales pour t'en défaire, qu'on ne manquera jamais de te faire remarquer.", 
                                title: "un bédouin des sables",                
                                statut:'Bédouins' , 
                                famous: "le xénomorphe, le Dalaï-Lama, le chef Raoni, Nicolas Hulot, les Australiens, Bouddha"});
                break;
                
            case (this.state.result == "3"):
                this.setState({ desc: "tu penses que le monde est une gigantesque réserve naturelle de guidounes, que tu décimes pour ne pas choper de maladie. Tu te parfumes avec ta propre sueur, chasse ta propre nourriture à l'aide de tes muscles, et ne te baigne jamais, si ce n'est dans ton propre jus. Tu suintes la virilité, et ta seule présence fait pousser de la barbe même à ces guidounes d'enfants, câlisses d'imberbes. Tu es l'exact opposé du consul montréalais.", 
                                title: "un chasseur de caribous",
                                statut:'Chasseurs' , 
                                famous: "Sylvester Stallone, Vladimir Poutine, Chuck Norris, Garou, ta grand-mère, Gordon Ramsay"});
                break;
                
            case (this.state.result == "4"):
                this.setState({ desc: "tu as le don de faire plaisir à tous ceux qui t'entourent, sans modération, mais également pour ton propre plaisir, gagant ainsi le respect de toute la communauté. Tu es un vrai bon-vivant, et un mauvais-mort, même si ça ne se dit pas, mais bon, on s'est compris, c'est le principal. Tu ne recherches jamais la reconnaissance, le bonheur de tes proches étant tout ce qui te vaille. Tu es l'exact opposé de la grosse guidoune", 
                                title: "un maître-poutinier",
                                statut:'Maîtres-poutiniers' , 
                                famous: "Maïté, Francis Lalanne, Joël Robuchon, Patrick Sébastien, Keanu Reeves, les mecs de chez Nachos"});
                break;
                
            case (this.state.result == "5"):
                this.setState({ desc: "la sagesse est ton crédo, l'expérience ton arme de prédilection. Grâce à ton âge probablement canonique, tu es en mesure de connaître la vraie valeur des choses et de modérer tes actions afin de laisser la vie faire son travail. Tu te ferais même un petit plaisir à tuer tes adversaires à petit feu, avec leurs propres erreurs. Tu es la plus intangible et honorable des guidounes.", 
                                title: "un astrophysicien légendaire",  
                                statut:'Astrophysiciens' , 
                                famous: "Brian May, Hubert Reeves, Stephen Hawking, un maître shaolin, Jean d'Ormesson, Michel Serres"});
                break;
                
            case (this.state.result == "6"):
                this.setState({ desc: "tu parles comme un diplomate, mais tu frappes comme un diplomate. Ton don se résume à régler les situations de la plus calme des manières, la violence ne faisant pas partie de tes cordes. Tu penses que c'est en unissant le monde qu'il prospérera dans la plus parfaite harmonie, tandis que tu seras toujours aussi bien sapé. Tu es l'exact opposé du chasseur de caribou.", 
                                title: "un consul montréalais",             
                                statut:'Consuls' , 
                                famous: "Mère Thérésa, Nelson Mandela, le pape François, Jacques Cartier, ton thérapeute matrimonial, Marc-Emmanuel"});
                break;

            default :
                this.setState({ result: 'un mystère de la nature',
                                desc: "on ne sait pas trop ce que tu fais ici, c\'est la catégorie un peu fourre-tout, désolé.",
                                statut:'Mystères',
                                famous: 'les Miss France, la plupart des chanteurs modernes, le Yeti, mon voisin dans le placard de ma chambre, ton code génétique, un fromage dans le rayon des lessives'});
        }
        } else {
        this.setState({ result: 'un mystère de la nature',
                        desc: "on ne sait pas trop ce que tu fais ici, c\'est la catégorie un peu fourre-tout, désolé.",
                        statut:'Mystères',
                        famous: 'les Miss France, la plupart des chanteurs modernes, le Yeti, mon voisin dans le placard de ma chambre, ton code génétique, un fromage dans le rayon des lessives' });
        }
      }

      renderQuiz() {
        return (
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
          />
        );
      }
      
      renderResult() {
        return (
          <Result quizResult={this.state.title} desc={this.state.desc} famous={this.state.famous} statut={this.state.statut} />
        );
      }

  render() {
    return (
    <React.Fragment>
        <div class="journalContainer">     
        <div class="journal">
        <div className = "quizHeader">
            <h2 class="blog-title">Quel archétype es-tu ?</h2>
            </div>  
        <p class="lead blog-description">Un questionnaire des plus rigolos</p>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
        </div>
    </React.Fragment>
      );
  }
}

export default AppQuestion;