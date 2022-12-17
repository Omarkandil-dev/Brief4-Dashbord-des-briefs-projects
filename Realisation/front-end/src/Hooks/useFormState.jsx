import { useState } from "react";
export default (initialValue) => {
  const [stateValue, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  const reset = () => setValue("");

  return [stateValue, setValue, handleChange, reset];
};
