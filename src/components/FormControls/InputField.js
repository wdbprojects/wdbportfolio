import React from "react";
import { TextField } from "@mui/material";

const InputField = (props) => {
  const {
    name,
    label,
    value,
    multiline,
    error = null,
    onChange,
  } = props;
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      multiline={multiline}
      rows={5}
      {...(error && { error: true, helperText: error })}
      onChange={onChange}
      fullWidth
      variant="outlined"
      color="secondary"
      className="contactForm__inputFields"
      sx={{
        "& .MuiOutlinedInput-input": {
          fontSize: "1.5rem",
          padding: "1.2rem",
        },
        "& .MuiInputLabel-root": {
          color: "#a4acc4",
          fontSize: "1.2rem",
          padding: "0px",
          lineHeight: 1,
        },
        "& .MuiInputBase-inputMultiline": {
          padding: "0px",
        },
      }}
    />
  );
};

export default InputField;
