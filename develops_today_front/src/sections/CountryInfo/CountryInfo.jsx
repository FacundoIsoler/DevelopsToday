import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCountryStore from '../../store/countryStore';
import usePopulationStore from '../../store/populationStore';
import BorderCountry from '../../components/BorderCountry/BorderCountry';
import CountryCard from '../../components/CountryCard/CountryCard';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Button from '../../elements/Button/Button';
import styles from './CountryInfo.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CountryInfo = () => {
    const navigate = useNavigate();
    const { selectedCountry, countryInfo, countryFlags, setSelectedCountry } = useCountryStore();
    const { populationData, fetchPopulationData, resetPopulationData } = usePopulationStore();

    useEffect(() => {
        if (selectedCountry) {
            fetchPopulationData(selectedCountry.name);
        }
    }, [selectedCountry, fetchPopulationData]);

    const handleBackClick = () => {
        setSelectedCountry(null);
        resetPopulationData(); 
        navigate('/');
    };

    if (!countryInfo) return <p>Loading...</p>;

    const chartData = {
        labels: (populationData || []).map((entry) => entry.year),
        datasets: [
            {
                label: 'Population',
                data: (populationData || []).map((entry) => entry.value),
                borderColor: '#4caf50',
                borderWidth: 2,
                pointRadius: 3,
                tension: 0.1,
                fill: false,
            },
        ],
    };
    

    return (
        <div className={styles.container}>
            <Button onClick={handleBackClick}>Back to Country List</Button>
            <CountryCard
                country={{
                    name: countryInfo.name,
                    flag: countryFlags.length > 0 && countryFlags[0].flag ? countryFlags[0].flag : null,
                }}
            />
            <h2>Border Countries</h2>
            <div className={styles.borders}>
                {countryInfo.borders.map((border) => (
                    <BorderCountry key={border.countryCode} border={border} />
                ))}
            </div>
            <h2>Population Over Time</h2>
            <div className={styles.chart}>
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default CountryInfo;
