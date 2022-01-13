import { useEffect, useState } from "react";
import "../../assets/style/pagin.scss";
const Pagination = ({ total, setListView, setListData }) => {
  const [CurrentPage, setCurrentPage] = useState(0);
  let Total;
  if (total) {
    Total = Math.ceil(total.length / 10 - 1);
  }
  // console.log(total);

  useEffect(() => {
    getData();
  }, [CurrentPage, total]);

  const getData = () => {
    // window.history.pushState("list", "", `/?page=${CurrentPage}`);
    let realData = total.slice(CurrentPage * 10, CurrentPage * 10 + 10);
    setListView(realData);
  };

  const paginList = [];
  for (let i = 1; i <= Total + 1; i++) {
    paginList.push(i);
  }

  const goNext = () => {
    if (CurrentPage < 19) {
      setCurrentPage(CurrentPage + 1);
    }
  };

  const goPrev = () => {
    if (CurrentPage >= 1) {
      setCurrentPage(CurrentPage - 1);
    }
  };

  const pagin = () => {
    return paginList.map((i) => {
      return (
        <p
          key={i}
          className={`paginItem ${CurrentPage == i - 1 ? `currentPage` : ""}`}
          onClick={() => setCurrentPage(i - 1)}
        >
          {i}
        </p>
      );
    });
  };

  return (
    <div className="pagination">
      <div className="prevBtn">
        <h4 onClick={goPrev}>PREV</h4>
      </div>
      {pagin()}
      <div className="nextBtn">
        <h4 onClick={goNext}>NEXT</h4>
      </div>
    </div>
  );
};
export default Pagination;
