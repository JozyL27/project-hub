import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addNewProject } from "../../services/ProjectsService/ProjectsService";
import "./CreateProject.css";

const CreateProject = (props: any) => {
  const [touched, setTouched] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [isAddingValues, setIsAddingValues] = useState(false);
  const onNewProjectClick = () => {
    setTouched(true);
  };
  const onCancelClick = () => {
    setTouched(false);
    setIsAddingValues(false);
    setTitle("");
    setDescription("");
    setLink("");
  };
  const onValueChange = (event: any) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
      setIsAddingValues(true);
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else {
      setLink(event.target.value);
    }
  };
  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const { listId, onAddNewProject } = props;
    const input = { title, description, link, list_id: listId };
    addNewProject(input).then((res: any) => {
      setTouched(false);
      setIsAddingValues(false);
      setTitle("");
      setLink("");
      setDescription("");
      onAddNewProject();
    });
  };

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
            error={
              title.length < 4 && isAddingValues
                ? true
                : title.length >= 20
                ? true
                : false
            }
            helperText={
              title.length < 4 && isAddingValues
                ? "Title must be at least 4 characters long."
                : title.length >= 20
                ? "Title cannot exceed 20 characters in length."
                : null
            }
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
