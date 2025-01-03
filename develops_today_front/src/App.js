import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryList from './sections/CountryList/CountryList';
import CountryInfo from './sections/CountryInfo/CountryInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/showCountryInfo/:countryCode" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;