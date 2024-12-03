import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styles from "./PaginacaoTable.module.css";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  marginPagesDisplayed = 2,
  pageRangeDisplayed = 5,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage); // Correção: usar totalItems

  return (
    <ReactPaginate
      previousLabel={"Anterior"}
      nextLabel={"Próximo"}
      breakLabel={"..."}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      pageCount={pageCount} // Correção: usar pageCount calculado acima
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousClassName={styles.pageItem}
      previousLinkClassName={styles.pageLink}
      nextClassName={styles.pageItem}
      nextLinkClassName={styles.pageLink}
      breakClassName={styles.pageItem}
      breakLinkClassName={styles.pageLink}
      activeClassName={styles.active}
    />
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
};

export default Pagination;
