import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "outlined",
    color: "secondary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button
      {...configButton}
      sx={{
        fontSize: "1.5rem",
      }}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
