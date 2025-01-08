import { create } from 'zustand';

const usePopulationStore = create((set) => ({
    populationData: [],

    fetchPopulationData: async (countryName) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/showCountriesPopulation`);
            if (!response.ok) throw new Error('Failed to fetch population data');
            const data = await response.json();

            const countryData = data.find((item) => item.country === countryName);

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
