import React, { useEffect, useState } from "react";
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
const CountryPicker = ({handleCountryChange}) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country,id) => (
          <option key={id} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
