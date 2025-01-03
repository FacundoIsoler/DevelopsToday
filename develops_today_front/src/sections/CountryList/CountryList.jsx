import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCountryStore from '../../store/countryStore';
import styles from './CountryList.module.css';

const CountryList = () => {
    const { countries, fetchCountries, setSelectedCountry } = useCountryStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    const handleCountryClick = (country) => {
        setSelectedCountry({ name: country.name, code: country.countryCode });

        navigate(`/showCountryInfo/${country.countryCode}`, {
            state: { countryName: country.name },
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Available Countries</h1>
            <ul className={styles.countryList}>
                {countries.map((country) => (
                    <li
                        key={country.countryCode}
                        className={styles.countryItem}
                        onClick={() => handleCountryClick(country)}
                    >
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
