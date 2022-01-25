import React, { useState } from "react";
import { Typography } from "@mui/material";
import PortCategories from "../components/PortCategories";
import PortfolioItems from "../components/PortfolioItems";
import items from "../dataPortfolio";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    }),
  ),
];

const PortfolioPage = () => {
  const [portItems, setPortItems] = useState(items);
  const [categories, setCategories] =
    useState(allCategories);

  const filterItems = (category) => {
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    if (category === "all") {
      setPortItems(items);
    } else {
      setPortItems(newItems);
    }
  };

  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <Typography
          variant="h3"
          color="secondary"
          className="portfolio__mainTitle">
          Portfolio
        </Typography>
        <PortCategories
          categories={categories}
          filterItems={filterItems}
        />
        <PortfolioItems portfolioItems={portItems} />
      </div>
    </div>
  );
};

export default PortfolioPage;
