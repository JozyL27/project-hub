import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props: any) => {
  const { title, id } = props;
  return (
    <Link to={`/project/${id}`} className="projectCardLink">
      <li key={id} className="projectCardLi">
        <h4 className="projectCardH4">{title}</h4>
        <p>images go here</p>
      </li>
    </Link>
  );
};

export default ProjectCard;
