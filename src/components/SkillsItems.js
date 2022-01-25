import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const SkillsItems = ({ progress, skill }) => {
  return (
    <div className="skillsSections__container">
      <Typography
        variant="h3"
        className="skillTitle"
        color="inherit"
        sx={{
          fontSize: "2rem",
          fontWeight: "300",
        }}>
        {skill}
      </Typography>
      <div className="skillsSections__bar">
        <Typography variant="h4" className="skillText">
          {progress}
        </Typography>
        <div className="skillProgress">
          <div className="outerProgress">
            <div
              className="innerProgress"
              style={{ width: progress }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

SkillsItems.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillsItems;
