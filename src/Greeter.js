import React from 'react';
import { connect } from 'react-redux';
import { updateSalutation, updateName, reset } from './greeter.actions';

export function Greeter({ salutation, name, dispatch }) {
    return (
        <div>
            <GreetingDisplay name={name} salutation={salutation}/>
            <form>
                <label htmlFor="salutation">Salutation:</label>
                <input id="salutation" name="salutation" onChange={() => dispatch(updateSalutation())} ></input>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" onChange={() => dispatch(updateName())}></input>
                <button type="reset" onClick={() => dispatch(reset())} >Reset</button>
            </form>
        </div>
    );
}

export function GreetingDisplay({ salutation, name }) {
    return (
        <div>
            <span>{ salutation }</span>
            <span>{ name }</span>!
        </div>
    );
}

export default connect(
    state => ({ salutation: state.salutation, name: state.name })
)(Greeter);