import React from "react";
import { Typography } from "@mui/material";
import SkillsItems from "./SkillsItems";

const Skills = (props) => {
  return (
    <div className="skillsSections">
      <Typography
        color="secondary"
        className="skillsSections__title"
        sx={{ marginBottom: "3rem" }}>
        relevant skills
      </Typography>
      <div className="mainSkillsCont">
        <SkillsItems progress={"90%"} skill="problem solving" />
        <SkillsItems progress={"85%"} skill="javascript" />
        <SkillsItems progress={"85%"} skill="react" />
        <SkillsItems progress={"95%"} skill="html/css" />
        <SkillsItems progress={"70%"} skill="node.js/express" />
        <SkillsItems progress={"65%"} skill="mongoDB" />
        <SkillsItems progress={"60%"} skill="ux/ui" />
        <SkillsItems progress={"70%"} skill="adobe tools" />
      </div>
    </div>
  );
};

export default Skills;
