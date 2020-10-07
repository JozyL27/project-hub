import React, { useState, useEffect } from "react";
import { getListById } from "../../services/ListsService/ListsService";
import { useAuth0 } from "@auth0/auth0-react";

const ListPage = (props: any) => {
  const [list, setList] = useState<any>({});
  const { isAuthenticated } = useAuth0();
  const { listId } = props.match.params;

  useEffect(() => {
    const fetchData = async () => {
      const list = await getListById(listId);
      setList(list);
    };
    isAuthenticated && fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section>
      <h3>{list.title}</h3>
      <p>projects for list</p>
    </section>
  );
};

export default ListPage;
