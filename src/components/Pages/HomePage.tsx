import React from "react";
import { Box, Paper } from "@mui/material";
import { styles } from "../styles";
import MenuHamb from "../../img/menu_hamb.png";
import Cifrao from "../../img/cifrao.png";
import GrafSeta from "../../img/graf_seta.png";
import User from "../../img/user.png";
import MonerBag from "../../img/money_bag.png";

const HomePage = () => {
  return (
    <React.Fragment>
      <Box sx={{ ...styles.pageContainer }}>
        <Paper sx={{ ...styles.homePagePaper }}>
          <Box sx={{ ...styles.homePageTopSide }}>
            <Box sx={{ ...styles.homePageTopSideText }}>
              This project aims to simulate an investment portfolio and all it's
              funcionalities &gt;&gt;
            </Box>
            <Box sx={{ ...styles.homePageTopSideFuncionalities }}>
              <Box sx={{ ...styles.homePageTopSideBox }}>
                <img
                  className="homePageTopSideImage"
                  alt="menu_hamb"
                  src={MenuHamb}
                />
                Products Management
              </Box>
              <Box sx={{ ...styles.homePageTopSideBox }}>
                <img
                  className="homePageTopSideImage"
                  alt="cifrao"
                  src={Cifrao}
                />
                My Earnings
              </Box>
              <Box sx={{ ...styles.homePageTopSideBox }}>
                <img
                  className="homePageTopSideImage"
                  alt="graf_seta"
                  src={GrafSeta}
                />
                Overall Profitability
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...styles.homePageDivider }}></Box>
          <Box sx={{ ...styles.homePageDownSide }}>
            <Box sx={{ ...styles.homePageDownSideFuncionalities }}>
              <Box sx={{ ...styles.homePageDownSideBox }}>
                <img className="homePageDownSideImage" alt="user" src={User} />
              </Box>
              <Box sx={{ ...styles.homePageDownSideBox }}>
                <img
                  className="homePageDownSideImage"
                  alt="money_bag"
                  src={MonerBag}
                />
              </Box>
            </Box>
            <Box sx={{ ...styles.homePageDownSideText }}>
              These and other features you can find on the manager page, in
              addition to an exclusive area for you and your investments!
            </Box>
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
