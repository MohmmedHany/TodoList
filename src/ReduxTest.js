import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
  }
}

const ReduxTest = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 3 })}>
        Add 3
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 5 })}>
        Subtract 5
      </button>
    </div>
  );
};

export default ReduxTest;
