import {
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";

const CheckboxControl = (props) => {
  const { name, label, onChange, value } = props;

  const convertToDefaultEventParameter = (name, value) => {
    return { target: { name: name, value: value } };
  };

  return (
    <FormGroup
      sx={
        {
          /* paddingLeft: "0.6rem", */
        }
      }>
      <FormControlLabel
        label={label}
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "1.5rem",
          },
        }}
        control={
          <Checkbox
            color="secondary"
            name={name}
            checked={value}
            onChange={(event) => {
              return onChange(
                convertToDefaultEventParameter(
                  name,
                  event.target.checked,
                ),
              );
            }}
          />
        }
      />
    </FormGroup>
  );
};

export default CheckboxControl;
