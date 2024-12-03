import React, { useState } from 'react'; 
import styles from './CarrosselInicio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Carrossel/img/image (1).png';
import img2 from '../Carrossel/img/image (2).png';
import img3 from '../Carrossel/img/image (3).png';

const images = [img1, img2, img3];

function CarrosselInicio({ isOpen }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={`${styles.container2} ${isOpen ? styles.small2 : ''}`}>
            <div className={styles.carrousel2}>
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
            </div>
            <div className={styles.controls2}>
                <button className={styles.prev2} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className={styles.next2} onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

export default CarrosselInicio;
