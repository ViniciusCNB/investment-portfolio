import React, { useState } from "react";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import "./index.css";
import { styles } from "./components/styles";
import HomePage from "./components/Pages/HomePage";
import ManagerPage from "./components/Pages/ManagerPage";
import BottomBar from "./components/BottomBar";

const App = () => {
  const [page, setPage] = useState(true);

  const handleHomeClick = () => {
    setPage(true);
  };

  const handleManagerClick = () => {
    setPage(false);
  };

  const handleAboutClick = () => {
    alert("ABOUT");
  };

  return (
    <React.Fragment>
      <Box sx={{ ...styles.body }}>
        <Box>
          <TopBar
            handleHomeClick={handleHomeClick}
            handleManagerClick={handleManagerClick}
            handleAboutClick={handleAboutClick}
          />
        </Box>
        <Box sx={{ ...styles.bottomContainer }}>
          {page ? <HomePage /> : <ManagerPage />}
        </Box>
        <Box>
          <BottomBar />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default App;
