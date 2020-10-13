import React, { useState, useEffect } from "react";
import { getListById } from "../../services/ListsService/ListsService";
import { getProjectsByListId } from "../../services/ProjectsService/ProjectsService";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useAuth0 } from "@auth0/auth0-react";
import CreateProject from "../../Components/CreateProject/CreateProject";
import "./ListPage.css";

const ListPage = (props: any) => {
  const [list, setList] = useState<any>({});
  const [error, setError] = useState<any>(null);
  const [projects, setProjects] = useState<any>([]);
  const { isAuthenticated } = useAuth0();
  const { listId } = props.match.params;

  const onAddNewProject = async () => {
    setError(null);
    const projects = await getProjectsByListId(listId).catch((err) => {
      setError(err);
    });
    setProjects(projects);
  };

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      const list = await getListById(listId);
      const projects = await getProjectsByListId(listId).catch((err) => {
        setError(err);
      });
      setList(list);
      !error && setProjects(projects);
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="listPageContainer">
      <h3 className="listPageH3">{list.title}</h3>
      <CreateProject listId={listId} onAddNewProject={onAddNewProject} />
      {error && <p>{error.message}</p>}
      <ul className="listPageUl">
        {!error && projects
          ? projects.map((el: any) => (
              <ProjectCard key={el.id} id={el.id} title={el.title} />
            ))
          : null}
      </ul>
    </section>
  );
};

export default ListPage;
