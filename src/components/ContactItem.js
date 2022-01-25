import React from "react";
import { Typography } from "@mui/material";

const ContactItem = ({ icon, text1, text2, title }) => {
  return (
    <div className="contactItem">
      <div className="contactItem__icon">{icon}</div>
      <div className="contactItem__text">
        <Typography
          className="contactItem__text--title"
          variant="h4">
          {title}
        </Typography>
        <Typography
          className="contactItem__text--text1"
          variant="subtitle1">
          {text1}
        </Typography>
        <Typography
          className="contactItem__text--text2"
          variant="subtitle2">
          {text2}
        </Typography>
      </div>
    </div>
  );
};

export default ContactItem;
