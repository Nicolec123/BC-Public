import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {

  const scrollToTop = () => {
    console.log("Botão clicado! Rolando para o topo.");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Rola suavemente até o topo
    });
  };

  return (
    <div className={styles.scrollToTop}>
      <div onClick={scrollToTop} className={styles.icon}>
        <FaArrowUp />
      </div>
    </div>
  );
};

export default ScrollToTop;
