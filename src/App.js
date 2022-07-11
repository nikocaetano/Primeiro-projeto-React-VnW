import React, { Component } from "react";

/*class App extends Component{
  state ={
    nome: 'Nikolas Caetano',
    nome2: 'Glee',
    nome3: 'Maldivas'

  }
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.nome2}</h2>
        <h3>{this.state.nome3}</h3>
      </div>
    )
  }
}

export default App;*/

/*class App extends Component{
  state ={
    nome: ['Lucas', 'Thiago', 'Felipe']
  }
  render(){
    return(
      <div>
        <h1>{this.state.nome[0]}</h1>
      </div>
    )
  }
}

export default App;*/

/*class App extends Component {
  state = {
    nome: [3, 4, 7, 6, 2, 5, 1]
  }
  render() {
    return (
      <div>
        <h1>{this.state.nome.sort()}</h1>
      </div>
    )
  }
}

export default App;*/

/*crie um component de class com um state com uma array
 de nomes e mostre na tela com um h1*/

class App extends Component{
  state = {
    nome: ['Paulinha', 'Isaque', 'Aline', 'Dyana', 'Helio', 'Nikolas']
  }
  render(){
    return (
      <div>
        <h1>{this.state.nome[0]}</h1>
        <h2>{this.state.nome[1]}</h2>
        <h3>{this.state.nome[2]}</h3>
        <h4>{this.state.nome[3]}</h4>
        <h5>{this.state.nome[4]}</h5>
        <h6>{this.state.nome[5]}</h6>
      </div>
    )
  }
}

export default App;