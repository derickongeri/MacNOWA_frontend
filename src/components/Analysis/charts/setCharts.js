import { ref } from "vue";
import { useStatsStore } from "src/stores/statsStore";
import useSupabase from "src/boot/supabase";

const { supabase } = useSupabase();

async function fetchGridValues(variable, tableID, gridID, pixelID) {
  try {
    const { data, error } = await supabase
      .from(`salt_${tableID}`)
      .select(`date, ${gridID}->${pixelID}`);

    console.log("Fetched data:", data);

    // Extract dates and values
    const labels = data.map((item) => item[`date`]);
    const dataValues = data.map((item) => item[`${pixelID}`]);

    let chartData

    if (variable == "oceanState") {
      chartData = {
        labels: ["Calm", "Rough", "Dangerous"],
        datasets: [
          {
            label: "days",
            backgroundColor: ["#2bdc1070", "#efe44d70", "#de1d1380"],
            borderColor: "#2bdc1000",
            pointBackgroundColor: "#ffffff00",
            pointBorderColor: "#2bdc1070",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#2bdc1070",
            data: [9, 5, 7],
            circular: true,
          },
        ],
      };

    } else {
      // Create data object for Chart.js
      chartData = {
        labels: labels,
        datasets: [
          {
            label: "Pixel Value",
            backgroundColor: "#f87979",
            data: dataValues,
          },
        ],
      };
    }



    return chartData

  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
}

export default function setSelectedPixelData() {
  const store = useStatsStore()

  const oceanVariables = [
    "oceanState",
    "SST",
    "salt",
    "currents",
    "height",
    "waveHeight",
  ];

  const setLineChart = async function () {
    let pixelInfo = store.getSelectedGrid

    console.log(pixelInfo, "jhkggjghk")

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

  }

  return {
    setLineChart
  }
 }
