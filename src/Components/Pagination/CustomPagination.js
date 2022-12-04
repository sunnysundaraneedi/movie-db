import Pagination from "@mui/material/Pagination";
import "./CustomPagination.css";

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const pageHandler = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pag_container">
      <Pagination
        count={numOfPages}
        onChange={(event) => pageHandler(event.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
