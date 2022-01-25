import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import TutorialsPage from "./pages/TutorialsPage";

import WdbDrawerResp from "./components/WdbDrawerResp";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const wdbtheme = createTheme({
  palette: {
    primary: {
      main: "#037fff",
    },
    secondary: {
      main: "#aa00ff",
    },

    text: {
      primary: "#a4acc4",
      secondary: "#a4acc4",
    },
  },
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    fontSize: 16,
  },
  overrides: {
    MuiFormLabel: {
      root: {
        borderColor: "rgb(232, 241, 250)",
        color: "rgba(255, 255, 255, 0.87)",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={wdbtheme}>
      <Router>
        <WdbDrawerResp>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </WdbDrawerResp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
