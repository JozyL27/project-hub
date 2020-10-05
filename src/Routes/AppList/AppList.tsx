import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AppList = () => {
  const { user } = useAuth0();
  return (
    <section>
      <p>hello user</p>
      {JSON.stringify(user, null, 2)}
    </section>
  );
};

export default AppList;
