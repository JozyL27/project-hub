import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
}

const ListCard: React.FC<Props> = (props) => {
  const { id, title } = props;
  return (
    <Link to={`/list/${id}`} className="listItemLink">
      <li className="listItem">
        <h4>{title}</h4>
      </li>
    </Link>
  );
};

export default ListCard;
