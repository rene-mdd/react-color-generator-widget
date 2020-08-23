import React from 'react';
import './App.css';
import ElementComponent from './components/elementComponent';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    }
    this.createColor = this.createColor.bind(this);
    this.remover = this.remover.bind(this);

  }

  remover(param) {
    console.log(param)
    const array = this.state.colors.filter((item) => {
      return item !== param
    });

    this.setState({ colors: array })
  }


  createColor() {
    this.setState({ colors: [...this.state.colors, this.randomColor()] })
  }

  randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  render() {
      const background = [...this.state.colors];
    return (
      <div className="App" style={{backgroundColor:  background.pop()}}>
        <div className="boxes">
          {this.state.colors.length <= 0 ? <p>There are no colors!</p> :
            this.state.colors.map((boxes) => {
              return (
                <ElementComponent box={boxes} remover={this.remover} />)
            })
          }
        </div>
        <div className="buttonDiv">
          <button className="create-button" onClick={this.createColor}>Create Color!</button>
        </div>
      </div>
    );
  }

}

export default App;
