import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Chip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {};
});

const PortfolioItems = ({ portfolioItems, categories }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className="gridCont">
      {portfolioItems.map((portItem) => {
        const {
          id,
          title,
          image,
          link1,
          link2,
          shortDesc,
          btnDisabled,
          description,
          tags,
        } = portItem;
        return (
          <Grid item xs={12} sm={6} md={4} key={id} className="gridCont__item">
            <Card className="cardCont">
              <CardMedia
                className="cardCont__media"
                component="img"
                alt={title}
                height="140"
                image={image}
              />
              <CardContent className="cardCont__content">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className="cardCont__content--title">
                  {title}
                </Typography>
                <Typography variant="body1" className="cardCont__content--body">
                  {shortDesc}
                </Typography>
              </CardContent>
              <CardActions className="cardCont__actions">
                <Button
                  href={link1}
                  target="_blank"
                  className="cardCont__actions--button"
                  variant="contained"
                  size="small"
                  color="secondary"
                  disabled={btnDisabled}>
                  Code
                </Button>
                <Button
                  href={link2}
                  target="_blank"
                  className="cardCont__actions--button"
                  variant="outlined"
                  size="small"
                  color="secondary">
                  View app
                </Button>
              </CardActions>
              <Divider light={true} sx={{ borderColor: "#616161" }} />
              <Stack direction="row" spacing={1} className="cardCont__chips">
                {tags.map((tag, index) => {
                  return (
                    <Chip
                      key={index}
                      variant="outlined"
                      label={tag}
                      size="small"
                      className="cardCont__chips--item"
                    />
                  );
                })}
              </Stack>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PortfolioItems;
