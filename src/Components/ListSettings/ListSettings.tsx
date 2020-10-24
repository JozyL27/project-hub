import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";
import SettingsCard from "../SettingsCard/SettingsCard";
import { useAuth0 } from "@auth0/auth0-react";
import "./ListSettings.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

interface Props {
  listId: string;
  history: any;
}

const ListSettings: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    open: false,
  });
  const handleIconButton = () => {
    setState({ open: !state.open });
  };
  const { open } = state;
  const { listId, history } = props;
  const { isAuthenticated } = useAuth0();
  return (
    <div className="settingsContainer">
      {isAuthenticated && (
        <IconButton className={classes.margin} onClick={handleIconButton}>
          <SettingsIcon fontSize="small" />
        </IconButton>
      )}
      {open ? <SettingsCard listId={listId} history={history} /> : null}
    </div>
  );
};

export default ListSettings;
