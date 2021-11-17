import { useState } from "react";

const useInputNum = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
}


export default useInputNum;