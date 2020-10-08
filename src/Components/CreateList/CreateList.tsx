import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const CreateList = () => {
  const [touched, setTouched] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTouched(false);
  }, []);

  const onAddNewListClick = () => {
    setTouched(!touched);
  };

  const onCancelClick = () => {
    setTouched(false);
  };

  const setValue = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <div className="createListContainer">
      <Button
        variant="contained"
        color={touched ? "secondary" : "primary"}
        onClick={touched ? onCancelClick : onAddNewListClick}
      >
        {touched ? "cancel" : "Add New List"}
      </Button>
      {touched ? (
        <form className="createListForm">
          <TextField
            error={title.length < 4 ? true : title.length >= 20 ? true : false}
            id="title"
            label="Title"
            value={title}
            onChange={setValue}
            helperText={
              title.length < 4
                ? "List Title must be at least 4 characters long."
                : title.length >= 20
                ? "List Title cannot exceed 20 characters in length."
                : "List Title"
            }
          />
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </form>
      ) : null}
    </div>
  );
};

export default CreateList;
