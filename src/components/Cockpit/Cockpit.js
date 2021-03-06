import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
        
        
        console.log('Cockpit.js useEffect');

        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);

        toggleBtnRef.current.click();

        return () => {
            //clearTimeout(timer);
            console.log('Cockpit.js cleanup work in useEffect')
        }

    }, []);

    useEffect(() => {
        console.log('Cockpit.js 2nd useEffect')
        return () => {
            console.log('Cockpit.js cleanup work in 2nd useEffect')
        }
    });

    let btnClass = '';
    const assignedClasses = [];

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.red);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button 
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toogle Persons
            </button>
            
            <button onClick={authContext.login} >Log in</button>
            
        </div>
    );
};

//// React memo only update the component if react detect change in any props here
export default React.memo(Cockpit);