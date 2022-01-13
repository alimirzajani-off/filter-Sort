import _ from "lodash";
import { useEffect, useState } from "react";
import Pagination from "./component/pagination/pagination";
import FilterBox from "./container/filterBox/filterBox";
import List from "./container/list/list";
import data from "./data/data.json";

function App() {
  const [ListData, setListData] = useState(data);
  const [ListView, setListView] = useState();

  return (
    <div className="App">
      <FilterBox Data={data} setData={setListData} />
      <List Data={ListView} />
      <Pagination total={ListData} setListView={setListView} />
    </div>
  );
}

export default App;
