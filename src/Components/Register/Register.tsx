import React, { useEffect, useState } from "react";
import "./Register.css";

const GraphQlURL = "http://localhost:9000/";
const fetchGreeting = async () => {
  const res = await fetch(GraphQlURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query {
                greeting
            }
            `,
    }),
  });
  const data = res.json();
  return data;
};

const Register = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchGreeting().then((res) => setMessage(res.data.greeting));
  }, []);

  return (
    <section>
      <p>{message.length > 0 ? message : "Loading..."}</p>
    </section>
  );
};

export default Register;
