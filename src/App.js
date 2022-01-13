import _ from "lodash";
import { useState } from "react";
import Pagination from "./component/pagination/pagination";
import FilterBox from "./container/filterBox/filterBox";
import List from "./container/list/list";
import data from "./data/data.json";

function App() {
  const [ListData, setListData] = useState();
  const [Lists, setList] = useState();
  const [isSort, setisSort] = useState(false);

  const sort = (Quality) => {
    let list;
    list = _.sortBy(ListData ? ListData : Lists, Quality);
    // list = ListData ? ListData : Lists.sort((a, b) => a.Quality - b.Quality);
    // console.log(list);
    setListData(list);
  };
  const total = data.length;
  return (
    <div className="App">
      <FilterBox Data={Lists} setData={setListData} />
      <List Data={ListData ? ListData : Lists} sort={sort} isSort={isSort} />
      <Pagination total={total} Data={data} setData={setList} />
    </div>
  );
}

export default App;
