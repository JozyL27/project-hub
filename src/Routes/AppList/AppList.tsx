import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserLists } from "../../services/ListsService/ListsService";
import { Link } from "react-router-dom";
import CreateList from "../../Components/CreateList/CreateList";
import ViewMoreButton from "../../Components/ViewMoreButton/ViewMoreButton";
import "./Applist.css";

const AppList = () => {
  const [lists, setLists] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  let [page, setPage] = useState(1);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    setError(null);
    setPage(1);
    const fetchData = async () => {
      const lists = await getUserLists(user.sub, page).catch((err: any) => {
        setError(err);
      });
      setLists(lists);
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onAddNewList = async () => {
    setError(null);
    try {
      const lists = await getUserLists(user.sub, page);
      setLists(lists);
    } catch (error) {
      setError(error);
    }
  };

  const onViewMoreClick = async () => {
    try {
      setPage((page += 1));
      const viewMoreLists = await getUserLists(user.sub, page);
      setLists([...lists, ...viewMoreLists]);
    } catch (error) {
      setError(error);
    }
  };

  const arrOfChecks = [
    lists && lists.length > 0,
    lists && lists.length % 9 === 0,
    !error,
  ].every((element) => element === true);

  return (
    <section className="appListSection">
      <h3>Lists</h3>
      <CreateList onAddNewList={onAddNewList} />
      {error && <p className="error">{error.message}</p>}
      <ul className="listsContainer">
        {lists
          ? lists.map((el: any) => (
              <Link to={`/list/${el.id}`} className="listItemLink" key={el.id}>
                <li className="listItem">
                  <h4>{el.title}</h4>
                </li>
              </Link>
            ))
          : null}
      </ul>
      {arrOfChecks && <ViewMoreButton onViewMoreClick={onViewMoreClick} />}
    </section>
  );
};

export default AppList;
