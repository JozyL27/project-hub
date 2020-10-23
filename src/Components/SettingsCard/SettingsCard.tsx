import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import "./SettingsCard.css";

// interface Props {
//   open: boolean;
// }

const SettingsCard: React.FC = () => {
  return (
    <Paper className="buttonsContainer">
      <Button variant="contained" color="secondary">
        Delete List
      </Button>
      <Button variant="contained" color="primary">
        Edit List
      </Button>
    </Paper>
  );
};

export default SettingsCard;
