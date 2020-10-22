import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Model } from "../../SnackbarStore/snackbarStore";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ErrorHandler: React.FC = () => {
  const { open, message } = useStoreState<Model>((state) => state.snackbar);
  const { handleClose } = useStoreActions<Model>((actions) => actions.snackbar);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      //   message={message}
      autoHideDuration={5000}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="error"
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorHandler;
