import React from "react";
import { makeStyles } from "@mui/styles";
import { Stack, Button } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {};
});

const PortCategories = ({ categories, filterItems }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      className="portfolio__catStack">
      {categories.map((category, index) => {
        return (
          <Button
            key={index}
            variant="outlined"
            color="secondary"
            className="portfolio__catStack--buttons"
            onClick={() => {
              filterItems(category);
            }}>
            {category}
          </Button>
        );
      })}
    </Stack>
  );
};

export default PortCategories;
