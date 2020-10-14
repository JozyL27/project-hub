import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserLists } from "../../services/ListsService/ListsService";
import { Link } from "react-router-dom";
import CreateList from "../../Components/CreateList/CreateList";
import "./Applist.css";

const AppList = () => {
  const [lists, setLists] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      const lists = await getUserLists(user.sub).catch((err: any) => {
        setError(err);
      });
      setLists(lists);
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onAddNewList = () => {
    setError(null);
    getUserLists(user.sub).then((res: any) => {
      setLists(res);
    });
  };

  return (
    <section className="appListSection">
      <h3>Lists</h3>
      <CreateList onAddNewList={onAddNewList} />
      {error && <p className="error">{error.message}</p>}
      <ul className="listsContainer">
        {lists && !error
          ? lists.map((el: any) => (
              <Link to={`/list/${el.id}`} className="listItemLink" key={el.id}>
                <li className="listItem">
                  <h4>{el.title}</h4>
                </li>
              </Link>
            ))
          : null}
      </ul>
    </section>
  );
};

export default AppList;
