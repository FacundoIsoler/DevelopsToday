import { create } from 'zustand';
import axios from 'axios';

const usePopulationStore = create((set) => ({
    populationData: [],

    fetchPopulationData: async (countryName) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/showCountriesPopulation`);

            const countryData = response.data.find((item) => item.country === countryName);

            if (countryData) {
                console.log('Population data:', countryData.populationCounts);
                set({ populationData: countryData.populationCounts });
            } else {
                console.error(`No population data found for the country: ${countryName}`);
                set({ populationData: [] });
            }
        } catch (error) {
            console.error('Error fetching population data:', error);
        }
    },

    resetPopulationData: () => set({ populationData: [] }),
}));

export default usePopulationStore;
