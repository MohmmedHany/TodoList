import { useState } from "react";

function useToggle(data) {
  const [state, setState] = useState(data);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggle;
