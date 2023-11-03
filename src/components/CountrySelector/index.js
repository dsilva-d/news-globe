import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function CountrySelector({ countries, onSelectCountry }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    const newSelectedCountry = event.target.value;
    setSelectedCountry(newSelectedCountry);
    onSelectCountry(newSelectedCountry); // Pass the selected country to the parent component
  };

  return (
    <FormControl variant="outlined">
      <Select
        label="Select a Country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {countries.map((country) => (
          <MenuItem key={country.code} value={country.code}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountrySelector;
