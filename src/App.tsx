import React from "react";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import "./index.css";
import { styles } from "./components/styles";

const App = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.body }}>
        <TopBar />
      </Box>
    </React.Fragment>
  );
};
export default App;
