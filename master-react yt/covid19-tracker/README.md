# API functions

```
import axios from "axios";

const url='https://covid19.mathdro.id/api';

export const fetchData= async (country)=>{
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }
    try{
        const {data} =await axios.get(changeableUrl);
        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}
```

```
import { fetchData } from "./api";
const handleCountryChange = async (value) => {
    const response = await fetchData(value);
    setCountry(value);
    setData(response);
  };
```

# Usage of Countup for blinking numbers

```
import CountUp from "react-countup";
<CountUp
    start={0}
    end={data.confirmed?.value}
    duration={2.5}
    separator=","
/>
```

# Usage of Grid and CardContent

```
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
<Grid container spacing={1} justifyContent="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data.confirmed?.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
</Grid>
```

# Use multiple classes when using styles

```
import cx from "classnames";
className={cx(styles.card, styles.infected)}
```

# Use of Line Chart

```
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const lineChart =(
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
```

# Use of Bar Chart

```
  const barChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
```
