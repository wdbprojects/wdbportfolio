import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const CheckboxWrapper = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel
        component="legend"
        color="secondary"
        sx={{
          ".MuiFormControl-root .MuiFormLabel-root": {
            color: "#a4acc4 !important",
          },
        }}>
        {legend}
      </FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              {...configCheckbox}
              color="secondary"
            />
          }
          label={label}></FormControlLabel>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
