import React, { useState, useEffect } from "react";
import { getProjectById } from "../../services/ProjectsService/ProjectsService";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProjectPage.css";

const ProjectPage = (props: any) => {
  const { projectId } = props.match.params;
  const [project, setProject] = useState<any>({});
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    const fetchData = async () => {
      const project = await getProjectById(projectId);
      setProject(project);
    };
    isAuthenticated && fetchData();
  }, []);
  return (
    <section>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </section>
  );
};

export default ProjectPage;
