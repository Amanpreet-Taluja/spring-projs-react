import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Charts = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
      await console.log(dailyData);
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
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
  ) : (
    <p>Loading..</p>
  );

  const barChart = data.confirmed ? (
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
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Charts;
