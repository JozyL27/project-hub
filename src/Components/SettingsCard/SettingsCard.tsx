import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { deleteList } from "../../services/ListsService/ListsService";
import "./SettingsCard.css";

interface Props {
  listId: string;
  history: {
    push: (str: string) => {};
  };
}

const SettingsCard: React.FC<Props> = (props) => {
  const { listId, history } = props;
  const handleDeleteClick = async () => {
    try {
      const deleteMessage = await deleteList(Number(listId));
      console.log(deleteMessage);
      history.push("/lists");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper className="buttonsContainer">
      <Button variant="contained" color="secondary" onClick={handleDeleteClick}>
        Delete List
      </Button>
      <Button variant="contained" color="primary">
        Edit List
      </Button>
    </Paper>
  );
};

export default SettingsCard;
