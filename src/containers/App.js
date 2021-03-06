import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    showCockPit: true,
    changeCounter: 0,
    authenticaded: false
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(item => item.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1
      };
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  loginHandler = () => {
    this.setState({ authenticaded: true });
  }

  render() {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonsHandler}
              changed={this.nameChangedHandler}
              isAuthenticated={this.state.authenticaded}>
            </Persons>
          }
        </div>
      );
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showCockPit: false })}>Remove Cockpit</button>
        <AuthContext.Provider value={
          {
            authenticaded: this.state.authenticaded,
            login: this.loginHandler
          }
          }>
          {this.state.showCockPit ? (
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    )
  };
}

export default withClass(App, classes.App);
