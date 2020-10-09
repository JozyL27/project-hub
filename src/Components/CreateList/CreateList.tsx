import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useAuth0 } from "@auth0/auth0-react";
import { createList } from "../../services/ListsService/ListsService";
import "./CreateList.css";

const CreateList = (props: any) => {
  const [touched, setTouched] = useState(false);
  const [title, setTitle] = useState("");
  const [isAddingTitle, setIsAddingTitle] = useState(false);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    setTouched(false);
    setIsAddingTitle(false);
  }, []);

  const onAddNewListClick = () => {
    setTouched(!touched);
  };

  const onCancelClick = () => {
    setTouched(false);
    setIsAddingTitle(false);
    setTitle("");
  };

  const setValue = (event: any) => {
    setTitle(event.target.value);
    setIsAddingTitle(true);
  };

  const onSubmitClick = async (event: any) => {
    event.preventDefault();
    await createList({ title: title, author: user.sub }).then((res) => {
      console.log(res);
      props.onAddNewList();
      setIsAddingTitle(false);
      setTitle("");
      setTouched(false);
    });
  };

  return (
    <div className="createListContainer">
      {isAuthenticated ? (
        <Button
          variant="contained"
          color={touched ? "secondary" : "primary"}
          onClick={touched ? onCancelClick : onAddNewListClick}
        >
          {touched ? "cancel" : "Add New List"}
        </Button>
      ) : null}
      {touched && isAuthenticated ? (
        <form className="createListForm" onSubmit={onSubmitClick}>
          <span className="newListSpan">Create New List</span>
          <TextField
            error={
              title.length < 4 && isAddingTitle
                ? true
                : title.length >= 20
                ? true
                : false
            }
            id="title"
            label="Title"
            variant="outlined"
            value={title}
            onChange={setValue}
            required
            helperText={
              title.length < 4 && isAddingTitle
                ? "List Title must be at least 4 characters long."
                : title.length >= 20
                ? "List Title cannot exceed 20 characters in length."
                : "List Title"
            }
          />
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      ) : null}
    </div>
  );
};

export default CreateList;
