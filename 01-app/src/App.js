import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    objStyle : {backgroundColor: 'blue'},

    colors : [
      {id:1, name:'violet', color:'#f5aafb'},
      {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
      {id:3, name:'pale green', color:'#aafbde'},
      {id:4, name:'vermillon', color:'#fe532e'},
      {id:5, name:'sky blue', color:'#82c4fa'},
      {id:6, name:'salmon', color:'#fb8b8b'},
    ],

    name: '',
    color: ''

  }

  handleChange = e => this.setState({
    [e.target.name]: e.target.value
  })

  // handleChange = e => this.setState({
  //   [e.target.name]: e.target.value
  // }, () => {
  //   console.log('this.state.name : ', this.state.name);
  //   console.log('this.state.color : ', this.state.color);
  // })

  changeColor(color) {
    this.setState({
      objStyle : {backgroundColor: color}
    });
  }
  handleAddColor = (e) => {
    e.preventDefault();

    console.log('coucou');
    this.setState({
      colors: [...this.state.colors, {name: this.state.name, color: this.state.color, id: this.state.colors.length + 1}]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={this.state.objStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coloring input</h2>
        </div>
        <p className="App-intro">
          Quand je change la valeur du champ texte ci-dessous, je change la couleur de fond du header
        </p>
        <ul className="color-container"> {
          this.state.colors.map( item =>
            <li key={item.id}>
              <button style={{backgroundColor: item.color}}
                      onClick={() => this.changeColor(item.color)}>
                {item.name}
              </button>
            </li>
          )
        }

        </ul>
        <div  className="creation">
        <form onSubmit={this.handleAddColor} className="form">

          <p><label className="label">Color name : </label>
          <input type="text" onChange={this.handleChange} name="name"/></p>

          <p><label className="label">Color : </label>
          <input type="text" onChange={this.handleChange} name="color"/></p>
          <button type="submit">Ajouter une couleur</button>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
