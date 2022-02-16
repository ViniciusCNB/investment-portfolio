import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "./styles";
import TopBarButton from "./TopBarButton";

const TopBar = () => {
  return (
    <React.Fragment>
      <Paper sx={{ ...styles.topBar }}>
        <Box sx={{...styles.topBarButtonContainer}}>
          <TopBarButton name="Button 1" />
          <TopBarButton name="Button 2" />
          <TopBarButton name="Button 3" />
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default TopBar;
