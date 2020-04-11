import React from "react";
import Card from "./Card";

const CardList = props => {
  //console.log(props);
  return (
    <div className="card-list">
      {props.items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
