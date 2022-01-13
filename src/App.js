import _ from "lodash";
import { useEffect, useState } from "react";
import Pagination from "./component/pagination/pagination";
import FilterBox from "./container/filterBox/filterBox";
import List from "./container/list/list";
import data from "./data/data.json";

function App() {
  const [ListData, setListData] = useState(data);
  const [ListView, setListView] = useState();
  const [ListSort, setListSort] = useState();
  const [isSort, setisSort] = useState(false);

  const sort = (Quality) => {
    let list = ListData.sort(function (a, b) {
      var nameA = a[Quality].toUpperCase();
      var nameB = b[Quality].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    setListSort(list);
  };

  return (
    <div className="App">
      <FilterBox Data={data} setData={setListData} />
      <List Data={ListView} sort={sort} isSort={isSort} />
      <Pagination total={ListData} setListView={setListView} />
    </div>
  );
}

export default App;
