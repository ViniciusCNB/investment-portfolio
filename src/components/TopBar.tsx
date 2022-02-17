import React, { FC } from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "./styles";
import TopBarButton from "./TopBarButton";
import Logo from "../img/logo.png";

interface TopBarProps {
  handleHomeClick: () => void
  handleManagerClick: () => void
  handleAboutClick: () => void
}

const TopBar: FC<TopBarProps> = ({handleHomeClick, handleManagerClick, handleAboutClick}) => {
  return (
    <React.Fragment>
      <Paper sx={{ ...styles.topBar }}>
        <img className="imgLogo" alt="logo" src={Logo} />
        <span className="siteTitle typingAnimation">investment.portfolio</span>
        <Box sx={{ ...styles.topBarButtonContainer }}>
            <TopBarButton name="HOME" handleClick={handleHomeClick} />
            <TopBarButton name="MANAGER" handleClick={handleManagerClick} />
            <TopBarButton name="ABOUT" handleClick={handleAboutClick} />
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default TopBar;
