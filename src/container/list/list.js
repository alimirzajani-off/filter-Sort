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
        <div className="listItem">
          <h5>مقدار جدید</h5>
        </div>
        <div className="listItem">
          <h5>مقدار قدیمی</h5>
        </div>
        <div className="listItem">
          <h5>فیلد</h5>
        </div>
        <div className="listItem">
          <h5>نام آگهی</h5>
        </div>
        <div className="listItem">
          <h5>تاریخ</h5>
        </div>
        <div className="listItem">
          <h5>نام تغییر دهنده</h5>
        </div>
        <div className="listItem liFavorites">
          <h5>نشان شده</h5>
        </div>
      </div>
      {showList()}
    </div>
  );
};
export default List;
