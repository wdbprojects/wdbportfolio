import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SelectControl = (props) => {
  const { name, label, value, onChange, options } = props;
  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ minWidth: 120 }}>
      <InputLabel color="secondary">{label}</InputLabel>
      <Select
        color="secondary"
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        sx={{
          ".MuiSelect-select ": {
            fontSize: "1.5rem",
            padding: "1.2rem",
          },
        }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => {
          const { id, code, title } = option;
          return (
            <MenuItem key={id} value={code} sx={{}}>
              {title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectControl;
