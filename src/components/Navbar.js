import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import avatar from "../assets/images/avatar.png";

const navdata = [
  {
    title: "home",
    url: "/",
    icon: <HomeIcon className="navButton__icon" />,
  },
  {
    title: "portfolio",
    url: "/portfolio",
    icon: <WorkIcon className="navButton__icon" />,
  },
  {
    title: "contact",
    url: "/contact",
    icon: <ConnectWithoutContactIcon className="navButton__icon" />,
  },
];

const Navbar = () => {
  return (
    <div className="sidenav">
      <div className="sidenav__profile">
        <img src={avatar} alt="webdevbro avatar" />
      </div>
      <List component="nav" className="sidenav__navLinks">
        {navdata.map(({ title, url, icon }) => {
          return (
            <NavLink to={url} exact key={title}>
              <ListItemButton
                selected={false}
                color="secondary"
                className="navButton">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} className="navButton__text" />
              </ListItemButton>
            </NavLink>
          );
        })}
      </List>
      <footer className="sidenav__footer">
        <p>
          <strong>&copy; {new Date().getFullYear()} webdevbro</strong> <br />{" "}
          all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Navbar;
