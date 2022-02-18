import React from 'react'
import { Paper, Box } from '@mui/material'
import { styles } from './styles'
import Instagram from "../img/logo_insta.png";

const BottomBar = () => {
  return (
    <React.Fragment>
      <Paper sx={{ ...styles.bottomBar }}>
        <Box sx={{ ...styles.bottomBarText }}>
          <img className="bottomBarImage" alt="logo_insta" src={Instagram} />
          @vinicius_cnborges
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default BottomBar
