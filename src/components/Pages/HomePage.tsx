import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "../styles";

const HomePage = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.pageContainer }}>
        <Paper sx={{ ...styles.homePagePaper }}>
          <Box>
            This project aims to simulate an investment portfolio and all it's funcionalities.
          </Box>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
