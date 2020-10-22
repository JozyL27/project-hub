import { createStore, action, Action } from "easy-peasy";

export interface snackbarModel {
  open: boolean;
  message: string;
  handleClose: Action<snackbarModel, void>;
  handleOpen: Action<snackbarModel, string>;
}

export interface Model {
  snackbar: snackbarModel;
}

const model: Model = {
  snackbar: {
    open: false,
    message: "",
    handleClose: action((errBar) => {
      errBar.open = false;
    }),
    handleOpen: action((errBar, message) => {
      errBar.open = true;
      errBar.message = message;
    }),
  },
};

export const snackbarStore = createStore(model);
