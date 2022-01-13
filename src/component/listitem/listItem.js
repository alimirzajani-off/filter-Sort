import { useEffect, useState } from "react";
import { SetFavorite, CheckFavorite } from "./favorite";

const ListItem = ({ item }) => {
  const [isFav, setisFav] = useState();
  useEffect(() => {
    CheckFavorite(item.id);
  }, [isFav]);

  return (
    <div className="listItems">
      <div className="listItem liNewValue">
        <p>{item.new_value}</p>
      </div>
      <div className="listItem liOldValue">
        <p>{item.old_value}</p>
      </div>
      <div className="listItem liField">
        <p>{item.field}</p>
      </div>
      <div className="listItem liTitle">
        <p>{item.title}</p>
      </div>
      <div className="listItem liDate">
        <p>{item.date}</p>
      </div>
      <div className="listItem liName">
        <p>{item.name}</p>
      </div>
      <div
        className="listItem liFavorite"
        onClick={() => SetFavorite(item.id, setisFav)}
      >
        <CheckFavorite id={item.id} />
      </div>
    </div>
  );
};

export default ListItem;
