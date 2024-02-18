import "./styles.css";
import TextField from "@mui/material/TextField";
import useStore from "@/store";
import { useState } from "react";
import { Button } from "@mui/material";

const Input = () => {
  const { addList } = useStore();
  const [ value, setValue ] = useState("test");
  const onClick = () => {
    addList(value)
  }
  return (
    <>
      <div className="h-1/5 bg-slate-100 p-4">
        <TextField
          fullWidth
          id="TodoInput"
          label="ToDO"
          multiline
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onClick}>submit</Button>
      </div>
    </>
  );
};

export default Input;
