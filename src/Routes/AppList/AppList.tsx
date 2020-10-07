import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserLists } from "../../services/ListsService/ListsService";
import { Link } from "react-router-dom";
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

  return (
    <section className="appListSection">
      <h3>Lists</h3>
      <ul className="listsContainer">
        {isAuthenticated && lists.length > 0
          ? lists.map((el: any) => (
              <li key={el.id}>
                <h4>
                  <Link to={`/list/${el.id}`}>{el.title}</Link>
                </h4>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default AppList;
