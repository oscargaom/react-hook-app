import React from "react";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, reset, decrement } = useCounter(10);
  const factory = 3;

  return (
    <>
      <h1>Counter With Custom Hook: {state} </h1>
      <hr />
      <button 
        className="btn btn-primary" 
        onClick={() => increment(factory)}>
        +{factory}
      </button>
      <button 
        className="btn btn-primary"
        onClick={reset}
        >
        Reset
      </button>
      <button 
        className="btn btn-primary" 
        onClick={() => decrement(factory)}>
        -{factory}
      </button>
    </>
  );
};
