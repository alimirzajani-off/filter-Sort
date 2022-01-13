import { useEffect, useState } from "react";
import "../../assets/style/pagin.scss";
const Pagination = ({ total, Data, setData }) => {
  const [CurrentPage, setCurrentPage] = useState(0);
  const Total = Math.ceil(total / 10 - 1);

  useEffect(() => {
    getData();
  }, [CurrentPage]);

  const getData = () => {
    let realData = Data.slice(CurrentPage * 10, CurrentPage * 10 + 10);
    setData(realData);
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
