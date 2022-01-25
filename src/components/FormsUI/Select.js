import React from "react";
import { useField, useFormikContext } from "formik";
import { TextField, MenuItem } from "@mui/material";

const SelectWrapper = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  /* error validation */
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField
      {...configSelect}
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
        ".css-1rejtkv-MuiSvgIcon-root-MuiSelect-icon": {
          color: "#a4acc4 !important",
        },
        ".css-1dqqqh8-MuiButtonBase-root-MuiMenuItem-root":
          {
            color: "#a4acc4 !important",
          },
      }}>
      {Object.keys(options).map((item, position) => {
        return (
          <MenuItem key={position} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
