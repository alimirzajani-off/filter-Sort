import { useState } from "react";
import Filter from "../../component/filter/filter";
import "../../assets/style/filter.scss";

const FilterBox = ({ Data, setData }) => {
  const [fName, setfName] = useState("");
  const [fDate, setfDate] = useState("");
  const [fTitle, setfTitle] = useState("");
  const [fField, setfField] = useState("");
  const filterData = () => {
    let list;
    list = Data.filter((item) => {
      return (
        item.name.includes(fName) &&
        item.date.includes(fDate) &&
        item.title.includes(fTitle) &&
        item.field.includes(fField)
      );
    });
    setData(list);
  };
  return (
    <div className="filterBox">
      <div className="fbBtn">
        <button type="submit" onClick={filterData} className="filterBtn">
          اعمال فیلتر
        </button>
      </div>
      {/* <div className="fbInput"> */}
      <Filter title={"فیلد"} set={setfField} />
      <Filter title={"نام آگهی"} set={setfTitle} />
      <Filter title={"تاریخ"} type="date" set={setfDate} />
      <Filter title={"نام تغییر دهنده"} set={setfName} />
      {/* </div> */}
    </div>
  );
};

export default FilterBox;
