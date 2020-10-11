import React, { useState, useEffect } from "react";
import { getListById } from "../../services/ListsService/ListsService";
import { getProjectsByListId } from "../../services/ProjectsService/ProjectsService";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useAuth0 } from "@auth0/auth0-react";
import "./ListPage.css";

const ListPage = (props: any) => {
  const [list, setList] = useState<any>({});
  const [projects, setProjects] = useState<any>([]);
  const { isAuthenticated } = useAuth0();
  const { listId } = props.match.params;

  useEffect(() => {
    const fetchData = async () => {
      const list = await getListById(listId);
      const projects = await getProjectsByListId(listId);
      setList(list);
      setProjects(projects);
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="listPageContainer">
      <h3 className="listPageH3">{list.title}</h3>
      <ul className="listPageUl">
        {projects.length > 0
          ? projects.map((el: any) => (
              <ProjectCard key={el.id} id={el.id} title={el.title} />
            ))
          : null}
      </ul>
    </section>
  );
};

export default ListPage;
