import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "./styles";
import TopBarButton from "./TopBarButton";
import Logo from "../img/logo.png"

const TopBar = () => {
  return (
    <React.Fragment>
      <Paper sx={{ ...styles.topBar }}>
        <img className="imgLogo" alt="logo" src={Logo} />
        <span className="siteTitle typingAnimation">investment.portfolio</span>
        <Box sx={{ ...styles.topBarButtonContainer }}>
          <TopBarButton name="HOME" />
          <TopBarButton name="DETAILS" />
          <TopBarButton name="ABOUT" />
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default TopBar;
