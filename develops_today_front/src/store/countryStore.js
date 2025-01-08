import { create } from 'zustand';

const useCountryStore = create((set, get) => ({
    countries: [],
    countryInfo: null,
    countryFlags: [],
    selectedCountry: null,

    fetchCountries: async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/showAvilableCountries`);
            if (!response.ok) throw new Error('Failed to fetch countries');
            const data = await response.json();
            set({ countries: data });
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    },

    fetchCountryInfo: async (code) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/showCountryInfo/${code}`);
            if (!response.ok) throw new Error('Failed to fetch country info');
            const data = await response.json();
            set({ countryInfo: data });
        } catch (error) {
            console.error('Error fetching country info:', error);
        }
    },

    fetchCountryFlags: async (countryName) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/showCountriesFlags`);
            if (!response.ok) throw new Error('Failed to fetch country flags');
            const data = await response.json();
            const countryFlag = data.find((country) => country.name === countryName);

            if (countryFlag) {
                set({ countryFlags: [countryFlag] });
            } else {
                console.error(`No flag found for the country: ${countryName}`);
                set({ countryFlags: [] });
            }
        } catch (error) {
            console.error('Error fetching country flags:', error);
        }
    },

    setSelectedCountry: async (country) => {
        console.log('Selected country:', country);
        set({ selectedCountry: country });

        if (country) {
            try {
                await get().fetchCountryInfo(country.code);
                await get().fetchCountryFlags(country.name);
            } catch (error) {
                console.error('Error fetching data for selected country:', error);
            }
        } else {
            set({ countryInfo: null, countryFlags: [] });
        }
    },
}));

export default useCountryStore;
