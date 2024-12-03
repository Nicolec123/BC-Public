import React, { useState } from 'react'; 
import styles from './CarrosselEmpresa.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Carrossel/assets/21.jpg';
import img2 from '../Carrossel/assets/CONTRBUIÇÃO-1500x400.jpg';

const images = [img1, img2];

function CarrosselEmpresa({ isOpen }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={`${styles.container} ${isOpen ? styles.small : ''}`}>
            <div className={styles.carrossel}>
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
            </div>
            <div className={styles.controls}>
                <button className={styles.prev} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className={styles.next} onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

export default CarrosselEmpresa;
