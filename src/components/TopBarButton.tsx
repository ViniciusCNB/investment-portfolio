import React, { FC } from "react";
import { Button } from "@mui/material";
import { styles } from "./styles";

interface TopBarButtonProps {
  name: string;
  handleClick: () => void;
}

const TopBarButton: FC<TopBarButtonProps> = ({ name, handleClick }) => {
  return (
    <React.Fragment>
      <div>
        <Button sx={{ ...styles.topBarButton }} onClick={handleClick}>
          {name}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default TopBarButton;
