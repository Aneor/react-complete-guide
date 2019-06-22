import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('Persons.js getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Persons.js shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Persons.js getSnapshotBeforeUpdate');
        return { message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Person.js componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('Person.js render');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={this.props.clicked.bind(this, index)}
                    changed={(event) => this.props.changed(event, person.id)}>
                </Person>
            );
        });
    }
}

export default Persons;