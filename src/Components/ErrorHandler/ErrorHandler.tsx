import { useStoreActions, useStoreState } from "easy-peasy";
import React from "react";
import { Model } from "../../SnackbarStore/snackbarStore";

const ErrorHandler: React.FC = () => {
  const { open, message } = useStoreState<Model>((state) => state.snackbar);
  const { handleClose } = useStoreActions<Model>((actions) => actions.snackbar);
  return open ? (
    <div
      onClick={handleClose}
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "black",
        padding: 10,
        color: "white",
      }}
    >
      {message}
    </div>
  ) : null;
};

export default ErrorHandler;
