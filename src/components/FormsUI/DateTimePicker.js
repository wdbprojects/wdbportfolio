import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  /* error validation */
  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <TextField
      {...configDateTimePicker}
      sx={{
        "& .MuiInputLabel-root": {
          color: "#a4acc4",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2e344e",
        },
        "& .MuiOutlinedInput-input": {
          color: "#F8F8F8",
        },
        ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
          color: "#a4acc4 !important",
        },
        ".css-1dqqqh8-MuiButtonBase-root-MuiMenuItem-root":
          {
            color: "#a4acc4 !important",
          },
      }}
    />
  );
};

export default DateTimePicker;
