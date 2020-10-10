import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props: any) => {
  const { title, id } = props;
  return (
    <Link to={`/project/${id}`}>
      <li key={id}>
        <h4>{title}</h4>
        <p>images go here</p>
      </li>
    </Link>
  );
};

export default ProjectCard;
