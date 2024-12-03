import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./PesquisaIcone.module.css"; // Certifique-se de criar esse arquivo CSS

function PesquisaIcone({ onClick }){
  return (
    <button className={styles.searchButtonIcon} onClick={onClick}>
      <FaSearch className={styles.searchIcon} />
    </button>
  );
};

export default PesquisaIcone;
