import React, { Component } from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <h1 className="counter">Counter: {props.counter}</h1>
      <button onClick={() => props.dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => props.dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => props.dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);