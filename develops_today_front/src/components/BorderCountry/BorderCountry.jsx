import React from 'react';
import useCountryStore from '../../store/countryStore';
import styles from './BorderCountry.module.css';

const BorderCountry = ({ border }) => {
    const { setSelectedCountry } = useCountryStore();

    const handleClick = () => {
        setSelectedCountry({ name: border.commonName, code: border.countryCode });
    };

    return (
        <div className={styles.borderCountry} onClick={handleClick}>
            <img
                src={`https://flagcdn.com/w40/${border.countryCode.toLowerCase()}.png`}
                alt={`${border.commonName} flag`}
                className={styles.flag}
            />
            <span className={styles.name}>{border.commonName}</span>
        </div>
    );
};

export default BorderCountry;
