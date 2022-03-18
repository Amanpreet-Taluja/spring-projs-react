import { fetchData } from "./api";
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Charts from "./components/Chart/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");
  useEffect(async () => {
    const response = await fetchData();
    console.log(response);
    setData(response);
  }, []);
  const handleCountryChange = async (value) => {
    const response = await fetchData(value);
    setCountry(value);
    setData(response);
    console.log(response);
  };
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country}/>
    </div>
  );
}

export default App;
