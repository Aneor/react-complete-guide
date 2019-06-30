import React, { PureComponent } from 'react';
import Person from './Person/Person'

//// Pure components its a normal component 
//// that implements shouldComponentUpdate validation for all props
class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state){
    //     console.log('Persons.js getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {        
    //     console.log('Persons.js shouldComponentUpdate');

    //     if(nextProps.persons !== this.props.persons){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapshotBeforeUpdate');
        return { message: 'Snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Person.js componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('Person.js componentWillUnmount');
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
                    changed={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}>
                </Person>
            );
        });
    }
}

export default Persons;