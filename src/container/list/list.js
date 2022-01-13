import { AiOutlineUp } from "react-icons/ai";
import ListItem from "../../component/listitem/listItem";
import "../../assets/style/list.scss";

const List = ({ Data, sort, isSort }) => {
  const showList = () => {
    if (Data) {
      return Data.map((item) => <ListItem item={item} key={item.id} />);
    }
  };

  return (
    <div className="list">
      <div className="listItemTitle">
        <div className="listItem" onClick={() => sort("new_value")}>
          <h5>مقدار جدید</h5>
          {isSort && <AiOutlineUp />}
        </div>
        <div className="listItem" onClick={() => sort("old_value")}>
          <h5>مقدار قدیمی</h5>
          {isSort && <AiOutlineUp />}
        </div>
        <div className="listItem" onClick={() => sort("field")}>
          <h5>فیلد</h5>
          {isSort && <AiOutlineUp />}
        </div>
        <div className="listItem" onClick={() => sort("title")}>
          <h5>نام آگهی</h5>
          {isSort && <AiOutlineUp />}
        </div>
        <div className="listItem" onClick={() => sort("date")}>
          <h5>تاریخ</h5>
          {isSort && <AiOutlineUp />}
        </div>
        <div className="listItem" onClick={() => sort("name")}>
          <h5>نام تغییر دهنده</h5>
          {isSort && <AiOutlineUp />}
        </div>
        <div className="listItem liFavorites">
          <h5>نشان شده</h5>
          {isSort && <AiOutlineUp />}
        </div>
      </div>
      {showList()}
    </div>
  );
};
export default List;
