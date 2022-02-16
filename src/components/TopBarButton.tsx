import React, { FC } from "react";
import { Button } from "@mui/material";
import { styles } from "./styles";

interface TopBarButtonProps {
  name: string;
}

const TopBarButton: FC<TopBarButtonProps> = ({ name }) => {
  return (
    <React.Fragment>
      <div>
        <Button sx={{ ...styles.topBarButton }}>
          {name}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default TopBarButton;
