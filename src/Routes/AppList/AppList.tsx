import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserLists } from "../../services/ListsService/ListsService";
import { Link } from "react-router-dom";
import CreateList from "../../Components/CreateList/CreateList";
import ViewMoreButton from "../../Components/ViewMoreButton/ViewMoreButton";
import { useStoreState } from "easy-peasy";
import { Model } from "../../SnackbarStore/snackbarStore";
import "./Applist.css";

const AppList: React.FC = () => {
  let [page, setPage] = useState(1);
  const [lists, setLists] = useState<any>([]);
  const { user, isAuthenticated } = useAuth0();
  const { message } = useStoreState<Model>((state) => state.snackbar);

  useEffect(() => {
    setPage(1);
    const fetchData = async () => {
      try {
        const lists = await getUserLists(user.sub, page);
        setLists(lists);
      } catch (error) {
        console.log(error);
      }
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onAddNewList = async () => {
    setPage(1);
    try {
      const newlist = await getUserLists(user.sub, page);
      setLists(newlist);
    } catch (error) {
      console.log(error);
    }
  };

  const onViewMoreClick = async () => {
    try {
      setPage((page += 1));
      const viewMoreLists = await getUserLists(user.sub, page);
      setLists([...lists, ...viewMoreLists]);
    } catch (error) {
      console.log(error);
    }
  };

  const arrOfChecks = [
    lists && lists.length > 0,
    lists && lists.length % 9 === 0,
    message.length === 0,
  ].every((element) => element === true);

  return (
    <section className="appListSection">
      <h3>Lists</h3>
      <CreateList onAddNewList={onAddNewList} />
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
