import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserLists } from "../../services/ListsService/ListsService";
import { Link } from "react-router-dom";
import CreateList from "../../Components/CreateList/CreateList";
import "./Applist.css";

// type list = {
//   id: number;
//   title: string;
// };

const AppList = () => {
  const [lists, setLists] = useState<any>([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const lists = await getUserLists(user.sub);
      setLists(lists);
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onAddNewList = async () => {
    const lists = await getUserLists(user.sub);
    setLists(lists);
  };

  return (
    <section className="appListSection">
      <h3>Lists</h3>
      <CreateList onAddNewList={onAddNewList} />
      <ul className="listsContainer">
        {isAuthenticated && lists.length > 0
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
