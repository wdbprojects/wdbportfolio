import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <TextField
      {...configTextField}
      className="contactForm__inputFields"
      sx={{
        "& .MuiInputLabel-root": {
          color: "#a4acc4",
          fontSize: "1.2rem",
          padding: "0px",
          lineHeight: 1,
        },
        "& .MuiOutlinedInput-notchedOutline legend span": {
          /* padding: "0px 0.75rem 0px 1rem !important", */
          /* paddingRight: "8px", */
          display: "inline-block !important",
          textAlign: "center !important",
          margin: "0px auto !important",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2e344e",
        },
        "& .MuiOutlinedInput-input": {
          color: "#F8F8F8",
          fontSize: "1.5rem",
          padding: "1.2rem",
        },
        "& .MuiInputBase-root-MuiOutlinedInput-root:hover & .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#2e344e",
          },
      }}
    />
  );
};

export default TextFieldWrapper;
