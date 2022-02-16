import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "./styles";

const HomePage = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.homePageContainer }}>
        <Paper sx={{ ...styles.homePagePaper }}>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
