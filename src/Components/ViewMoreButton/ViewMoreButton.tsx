import React from "react";
import Button from "@material-ui/core/Button";
import "./ViewMoreButton.css";

const ViewMoreButton = (props: any) => {
  const { onViewMoreClick } = props;
  return (
    <div className="viewButtonContainer">
      <Button variant="contained" color="primary" onClick={onViewMoreClick}>
        View More
      </Button>
    </div>
  );
};

export default ViewMoreButton;
