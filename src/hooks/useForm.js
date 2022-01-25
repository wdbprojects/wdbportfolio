import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& .MuiOutlinedInput-root input": {
        /* border: "1px solid #a4acc4", */
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2e344e",
      },
    },
  };
});

const useForm = (initialFormValues) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFormValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form
      className={classes.root}
      autoComplete="off"
      {...other}>
      {props.children}
    </form>
  );
};

export { useForm, Form };
