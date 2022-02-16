import React from "react";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import "./index.css";
import { styles } from "./components/styles";
import HomePage from "./components/HomePage";
import BottomBar from "./components/BottomBar";

const App = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.body }}>
        <Box>
          <TopBar />
        </Box>
        <Box sx={{ ...styles.bottomContainer }}>
          <HomePage />
        </Box>
        <Box>
          <BottomBar />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default App;
