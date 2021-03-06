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
  const [ADC, setADC] = useState(
    queryParams.get("sort") ? queryParams.get("sort") : "asc"
  );

  window.history.pushState(
    "list",
    "",
    `/?name=${fName ? fName : ""}&date=${fDate ? fDate : ""}&title=${
      fTitle ? fTitle : ""
    }&field=${fField ? fField : ""}&sort=${ADC ? ADC : "asc"}&sortval=${
      optionval ? optionval : ""
    }`
  );
  console.log(ADC);
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
          ?????????? ??????????
        </button>
      </div>
      <Filter title={"????????"} set={setfField} valu={fField} />
      <Filter title={"?????? ????????"} set={setfTitle} valu={fTitle} />
      <Filter title={"??????????"} type="date" set={setfDate} valu={fDate} />
      <Filter title={"?????? ?????????? ??????????"} set={setfName} valu={fName} />
      <Select set={setoption} title={"???????? ????????"} firstval={optionval}>
        <option value="">???? ???????? ????????</option>
        <option value="name">?????? ?????????? ??????????</option>
        <option value="date">??????????</option>
        <option value="title">?????? ????????</option>
        <option value="field">????????</option>
        <option value="old_value">?????????? ??????????</option>
        <option value="new_value">?????????? ????????</option>
      </Select>
      <Select set={setADC} title={"???????? ????????"} firstval={ADC}>
        <option value="asc">??????????</option>
        <option value="desc">??????????</option>
      </Select>
    </div>
  );
};

export default FilterBox;
