import React from "react";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incrementByFactory, reset, decrementByFactory } = useCounter(10);
  const factory = 3;

  return (
    <>
      <h1>Counter With Custom Hook: {counter} </h1>
      <hr />
      <button 
        className="btn btn-primary" 
        onClick={() => incrementByFactory(factory)}>
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
        onClick={() => decrementByFactory(factory)}>
        -{factory}
      </button>
    </>
  );
};
