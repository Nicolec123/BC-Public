import React from 'react';
import styles from './Select.module.css';

function Select({ options, onChange, value, className }) {
    return (
        <select className={`${styles.select} ${className}`} onChange={onChange} value={value}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
