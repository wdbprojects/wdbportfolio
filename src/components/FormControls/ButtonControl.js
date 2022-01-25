import React from "react";
import { Button } from "@mui/material";

const ButtonControl = (props) => {
  const { variant, label, onClick, type } = props;
  return (
    <Button
      variant={variant}
      color="secondary"
      fullWidth
      type={type}
      onClick={onClick}
      sx={{
        fontSize: "1.5rem",
      }}>
      {label}
    </Button>
  );
};

export default ButtonControl;
