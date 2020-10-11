import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./CreateProject.css";

const CreateProject = () => {
  const [touched, setTouched] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const onNewProjectClick = () => {
    setTouched(true);
  };
  const onCancelClick = () => {
    setTouched(false);
    setTitle("");
  };
  const onValueChange = (event: any) => {
    console.log(event.target.name);
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else {
      setLink(event.target.value);
    }
  };
  const onFormSubmit = (event: any) => {
    event.preventDefault();
    setTouched(false);
    setTitle("");
    setLink("");
    setDescription("");
    console.log(title, description, link);
  };
  console.log({ title, description, link });

  return (
    <div className="createProjectContainer">
      <Button
        variant="contained"
        color={touched ? "secondary" : "primary"}
        onClick={touched ? onCancelClick : onNewProjectClick}
      >
        {touched ? "Cancel" : "New Project"}
      </Button>

      {touched ? (
        <form className="createProjectForm" onSubmit={onFormSubmit}>
          <span className="newProjectSpan">New Project</span>
          <TextField
            id="Title"
            name="title"
            margin="normal"
            label="Title"
            variant="outlined"
            value={title}
            required
            onChange={onValueChange}
          />
          <TextField
            id="link"
            name="link"
            label="Link"
            margin="normal"
            variant="outlined"
            onChange={onValueChange}
            value={link}
          />
          <TextField
            id="description"
            name="description"
            multiline
            label="description"
            margin="normal"
            variant="outlined"
            rows={4}
            value={description}
            onChange={onValueChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      ) : null}
    </div>
  );
};

export default CreateProject;
