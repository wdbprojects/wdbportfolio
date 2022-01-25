import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

function WdbDrawerResp(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = <Navbar />;

  const container =
    window !== undefined
      ? () => window().document.body
      : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* SIDEBAR / NAVBAR */}
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders">
        <Drawer
          /* container={container}  */
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      {/* MAIN CONTENT */}
      <Box
        component="main"
        className="mainContent"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}>
        {children}
        <IconButton
          variant="outlined"
          color="inherit"
          className="navIcon"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
          }}>
          <MenuIcon className="navIcon__actualIcon" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default WdbDrawerResp;
