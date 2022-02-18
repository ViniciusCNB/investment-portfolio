import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "../styles";
import MenuHamb from "../../img/menu_hamb.png";
import Cifrao from "../../img/cifrao.png";

const HomePage = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.pageContainer }}>
        <Paper sx={{ ...styles.homePagePaper }}>
          <Box sx={{ ...styles.homePageTopSide }}>
            <Box sx={{ ...styles.homePageText }}>
              This project aims to simulate an investment portfolio and all it's
              funcionalities &gt;&gt;
            </Box>
            <Box sx={{ ...styles.homePageFuncionalities }}>
              <Box sx={{ ...styles.homePageBox }}>
                <img
                  className="homePageImage"
                  alt="logo_insta"
                  src={MenuHamb}
                />
                Products Management
              </Box>
              <Box sx={{ ...styles.homePageBox }}>
                <img className="homePageImage" alt="logo_insta" src={Cifrao} />
                My Earnings
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
