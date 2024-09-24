import { ref } from "vue";
import { useStatsStore } from "src/stores/statsStore";
import useSupabase from "src/boot/supabase";

const { supabase } = useSupabase();
const store = useStatsStore();

async function fetchGridValues(variable, tableID, gridID, pixelID) {
  try {
    const { data, error } = await supabase
      .from(`${variable}_${tableID}`)
      .select(`date, ${gridID}->${pixelID}`);

    console.log("Fetched data:", data);

    let chartData;

    if (variable == "ug_gmes_ocean_state_forecast") {
      // Initialize arrays to store dates for each condition
      const calmDays = [];
      const roughDays = [];
      const dangerousDays = [];
      const oceanConditions = [];

      // Function to filter dates based on pixel value
      const getConditionDays = (list, value) => {
        data.forEach((entry) => {
          if (entry[pixelID] === value) {
            list.push(entry.date);
          }
        });
      };

      // Filter days for each condition
      getConditionDays(calmDays, 1);
      getConditionDays(roughDays, 2);
      getConditionDays(dangerousDays, 3);

      oceanConditions.push(calmDays)
      oceanConditions.push(roughDays)
      oceanConditions.push(dangerousDays)

      store.updateOceanCondition(oceanConditions)

      // Chart data for Polar Area chart using Chart.js
      chartData = {
        labels: ["Calm", "Rough", "Dangerous"],
        datasets: [
          {
            label: "Days",
            backgroundColor: ["#2bdc1080", "#efe44d80", "#de1d1380"],
            borderColor: "#2bdc1000",
            pointBackgroundColor: "#ffffff00",
            pointBorderColor: "#2bdc1070",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#2bdc1070",
            data: [calmDays.length, roughDays.length, dangerousDays.length],
            circular: true,
          },
        ],
      };
    } else {
      // Extract dates and values
      const labels = data.map((item) => item[`date`]);
      const dataValues = data.map((item) => item[`${pixelID}`]);
      // Create data object for Chart.js
      chartData = {
        labels: labels,
        datasets: [
          {
            label: "Pixel Value",
            backgroundColor: "#002F6B60",
            data: dataValues,
            tension: 0.25,
            fill: true,
            borderColor: "#002F6B80",
          },
        ],
      };
    }

    return chartData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
}

export default function setSelectedPixelData() {

  const oceanVariables = [
    "ug_gmes_ocean_state_forecast",
    "salt",
    "sst",
    "ssc",
    "ssh",
    "swh",
  ];

  const setLineChart = async function () {
    let pixelInfo = store.getSelectedGrid;

    for (const variable of oceanVariables) {
      const chartData = await fetchGridValues(
        variable,
        pixelInfo.majorid,
        pixelInfo.minorid,
        pixelInfo.UniqueID
      );

      // Assuming you have a method to update the chart in the store
      store.updateChartData(variable, chartData);
    }
  };

  return {
    setLineChart,
  };
}
