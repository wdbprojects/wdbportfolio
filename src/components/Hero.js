import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import linktopdf from "../assets/images/ronaldo_ortiz.pdf";

const useStyles = makeStyles((theme) => {
  return;
});

const Hero = () => {
  return (
    <div className="heroContent">
      <Container className="heroContainer" maxWidth="md">
        <div className="heroContainer__text">
          <Typography variant="h2" className="mainTitle">
            Welcome to webdevbro!
          </Typography>
          <Typography variant="h3" paragraph className="subTitle2">
            My name is <span>Ronaldo Ortiz</span>, who am I?
          </Typography>
          <Typography variant="body1" className="body">
            I'm a full stack <span>web developer</span> who enjoys what I do a
            lot. I started out with a business degree but after spending a few
            years in the industry, I realized that my real passion is web
            development both on the frontend as well as the backend. So a few
            years ago I quit my job and started learning and working as a web
            developer, which of course was absolutely hard at the beginning, but
            now I feel it was worth the effort.
          </Typography>
          <Typography variant="body1" className="body">
            Long story short, and after studying PHP, MySQL, WordPress
            development and web design, I have switched my focus completely to
            the JavaScript ecosystem, and for me it might be a one way ticket at
            least for the foreseable feature.
          </Typography>
        </div>
        <div className="heroButtons">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="buttonsContainer">
            <Grid item>
              <Link to="/portfolio">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className="heroButtons">
                  portfolio
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  className="heroButtons">
                  let's have a chat &nbsp;
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={linktopdf} target="_blank" download>
                <Button
                  variant="outlined"
                  color="info"
                  size="large"
                  className="heroButtons">
                  download CV
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="iconsCont">
          <a
            href="https://github.com/wdbprojects"
            target="_blank"
            rel="noreferrer">
            <GrGithub />
          </a>
          <a
            href="https://twitter.com/webdevro"
            target="_blank"
            rel="noreferrer">
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.facebook.com/webdevbro"
            target="_blank"
            rel="noreferrer">
            <AiFillFacebook />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
