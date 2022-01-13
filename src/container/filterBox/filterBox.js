import { useEffect, useState } from "react";
import Filter from "../../component/filter/filter";
import "../../assets/style/filter.scss";

const FilterBox = ({ Data, setData }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [fName, setfName] = useState(queryParams.get("name"));
  const [fDate, setfDate] = useState(queryParams.get("date"));
  const [fTitle, setfTitle] = useState(queryParams.get("title"));
  const [fField, setfField] = useState(queryParams.get("field"));

  window.history.pushState(
    "list",
    "",
    `/?name=${fName ? fName : ""}&date=${fDate ? fDate : ""}&title=${
      fTitle ? fTitle : ""
    }&field=${fField ? fField : ""}`
  );
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

  useEffect(() => {
    if (Data) {
      filterData();
    }
  }, [Data]);

  return (
    <div className="filterBox">
      <div className="fbBtn">
        <button type="submit" onClick={filterData} className=" filterBtn">
          اعمال فیلتر
        </button>
      </div>
      <Filter title={"فیلد"} set={setfField} valu={fField} />
      <Filter title={"نام آگهی"} set={setfTitle} valu={fTitle} />
      <Filter title={"تاریخ"} type="date" set={setfDate} valu={fDate} />
      <Filter title={"نام تغییر دهنده"} set={setfName} valu={fName} />
    </div>
  );
};

export default FilterBox;
