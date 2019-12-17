import React from 'react';
import './App.css';

import CardList from './components/CardList/CardList.component'
import SearchBox from './components/SearchBox/SearchBox.component'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }));
  }

  handleChange = (e) => {

    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder='Search Monster' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
