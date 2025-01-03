import React from 'react';
import useCountryStore from '../../store/countryStore';
import styles from './CountryCard.module.css';

const CountryCard = ({ country, onClick }) => {
    const { selectedCountry } = useCountryStore();

    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.flagContainer}>
                <h3 className={styles.name}>{selectedCountry?.name || 'Country'}</h3>
                <img
                    src={country.flag}
                    alt={`${selectedCountry?.name || 'Country'} flag`}
                    className={styles.flag}
                />
            </div>
        </div>
    );
};

export default CountryCard;
