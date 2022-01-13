import { useEffect, useState } from "react";
import Filter from "../../component/filter/filter";
import "../../assets/style/filter.scss";
import Select from "../../component/filter/selectOption";

const FilterBox = ({ Data, setData }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [fName, setfName] = useState(queryParams.get("name"));
  const [fDate, setfDate] = useState(queryParams.get("date"));
  const [fTitle, setfTitle] = useState(queryParams.get("title"));
  const [fField, setfField] = useState(queryParams.get("field"));
  const [optionval, setoption] = useState(queryParams.get("sortval"));
  const [ADC, setADC] = useState(queryParams.get("ADC"));
  console.log(optionval);
  window.history.pushState(
    "list",
    "",
    `/?name=${fName ? fName : ""}&date=${fDate ? fDate : ""}&title=${
      fTitle ? fTitle : ""
    }&field=${fField ? fField : ""}&sort=${ADC ? ADC : "asc"}&sortval=${
      optionval ? optionval : ""
    }`
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
    let sortlist = list ? list : Data;
    if (optionval) {
      if (ADC == "asc") {
        list = sortlist.sort(function (a, b) {
          var nameA = a[optionval].toUpperCase();
          var nameB = b[optionval].toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
      } else if (ADC == "desc") {
        list = sortlist.sort(function (a, b) {
          var nameA = a[optionval].toUpperCase();
          var nameB = b[optionval].toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }

          return 0;
        });
      }
    }
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
      <Select set={setoption} title={"مرتب سازی"}>
        <option value="">بر اساس فیلد</option>
        <option value="name">نام تغییر دهنده</option>
        <option value="date">تاریخ</option>
        <option value="title">نام آگهی</option>
        <option value="field">فیلد</option>
        <option value="old_value">مقدار قدیمی</option>
        <option value="new_value">مقدار جدید</option>
      </Select>
      <Select set={setADC} title={"مرتب سازی"}>
        <option value="asc">صعودی</option>
        <option value="desc">نزولی</option>
      </Select>
    </div>
  );
};

export default FilterBox;
