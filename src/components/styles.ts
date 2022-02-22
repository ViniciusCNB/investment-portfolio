export const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  topBar: {
    backgroundColor: "rgb(235, 235, 235)",
    display: "flex",
    width: "100%",
    height: "150px",
    margin: "0px",
    textAlign: "left",
    alignItems: "center",
    color: "black",
    borderRadius: "0%",
    position: "relative",
  },
  topBarButton: {
    marginLeft: "20px",
    color: "black",
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: "Oswald, sans-serif",
    "&:hover": {
      color: "rgb(130, 130, 130)",
      backgroundColor: "rgb(235, 235, 235)",
      outline: "2px solid rgb(130, 130, 130)",
      outlineOffset: "-2px",
      transition: "color 0ms",
    },
  },
  topBarButtonContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    bottom: "5px",
    right: "5px",
  },
  bottomContainer: {
    width: "100%",
    height: "fit-content",
    minHeight: "500px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  pageContainer: {
    margin: "25px",
    width: "100%",
  },
  homePagePaper: {
    backgroundColor: "rgb(235, 235, 235)",
    padding: "25px",
    textAlign: "right",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
  },
  homePageTopSide: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Oswald, sans-serif",
    margin: "20px auto",
  },
  homePageDownSide: {
    position: "relative",
    margin: "20px auto",
    marginBottom: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "right",
    fontFamily: "Oswald, sans-serif",
  },
  homePageTopSideBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "27px",
    width: "100px",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "85px",
  },
  homePageDownSideBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "27px",
    width: "135px",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "85px",
  },
  homePageTopSideText: {
    width: "500px",
    fontSize: "50px",
    marginLeft: "0px",
  },
  homePageTopSideFuncionalities: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "30px",
  },
  homePageDownSideFuncionalities: {
    display: "flex",
    flexDirection: "row",
    marginRight: "100px",
  },
  homePageDivider: {
    margin: "70px auto",
    width: "90%",
    height: "2px",
    background: "black",
  },
  homePageDownSideText: {
    textAlign: "left",
    fontSize: "35px",
    width: "450px",
  },
  managerPagePaper: {
    backgroundColor: "rgb(235, 235, 235)",
    padding: "25px",
    textAlign: "center",
    height: "fit-content",
  },
  bottomBar: {
    backgroundColor: "rgb(235, 235, 235)",
    display: "flex",
    width: "100%",
    height: "100px",
    margin: "0px",
    color: "black",
    borderRadius: "0%",
    position: "relative",
    boxShadow: "3px 0px 1px 1px rgba(0, 0, 0, 0.4)",
    textAlign: "left",
    alignItems: "center",
  },
  bottomBarText: {
    display: "flex",
    alignItems: "center",
    fontSize: "25px",
    paddingLeft: "20px",
    fontFamily: "Oswald, sans-serif",
    fontWeight: "bold",
  },
};
