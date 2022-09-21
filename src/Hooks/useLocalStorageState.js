import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultValue) {
  //make a piece of a state  based off value in local storage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      val = defaultValue;
    }
    return val;
  });

  //useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
export default UseLocalStorageState;
