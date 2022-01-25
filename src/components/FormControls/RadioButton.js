import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioButton = (props) => {
  const { name, label, value, onChange, jobItems } = props;
  return (
    <FormControl>
      <FormLabel color="secondary">{label}</FormLabel>
      <RadioGroup
        name={name}
        value={value}
        onChange={onChange}
        row={true}
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "1.5rem",
          },
        }}>
        {jobItems.map((jobItem, index) => {
          return (
            <FormControlLabel
              key={jobItem.id}
              value={jobItem.name}
              control={<Radio color="secondary" />}
              label={jobItem.title}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
