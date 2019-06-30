import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types'

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount(){
        this.inputElement.current.focus();
    }

    render() {
        console.log('Person.js rendering...');
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref={this.inputElement}
                type="text" value={this.props.name} onChange={this.props.changed} />
            </Fragment>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);