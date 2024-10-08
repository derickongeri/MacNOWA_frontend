import { Notify } from "quasar";
import { ref } from "vue";
import { useStatsStore } from "src/stores/statsStore";
import { useRasterStore } from "src/stores/rasterstore";
import useSupabase from "src/boot/supabase";
import { axios } from "src/boot/axios";
import useNotify from "src/composables/useNotify.js";

// const { notifySuccess } = useNotify();
const { supabase } = useSupabase();
const store = useStatsStore();
const rasterstore = useRasterStore();

async function fetchGridValues(dates, variable, tableID, gridID, pixelID) {
  try {
    // const { data, error } = await supabase
    //   .from(`${variable}_${tableID}`)
    //   .select(`date, ${gridID}->${pixelID}`);

    // console.log("Fetched data:", data);

    const { data, error } = await supabase.rpc("fetch_rows_by_pixel_id", {
      start_date: dates.start,
      end_date: dates.end,
      table_name: `${variable}_${tableID}`,
      jsonb_column_name: `${gridID}`,
      pixel_id: `${pixelID}`,
    });

    console.log(data);

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
          if (entry[`data`] === value) {
            list.push(entry.date);
          }
        });
      };

      // Filter days for each condition
      getConditionDays(calmDays, 1);
      getConditionDays(roughDays, 2);
      getConditionDays(dangerousDays, 3);

      oceanConditions.push(calmDays);
      oceanConditions.push(roughDays);
      oceanConditions.push(dangerousDays);

      store.updateOceanCondition(oceanConditions);

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
      const dataValues = data.map((item) => item[`data`]);
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

function fetchRasterStats(dataObject, variable) {
  const variableMapping = {
    mangrovecover: {
      data: dataObject.coverstats,
      chartColors: ["#04ff17"],
    },
    mangrovechange: {
      data: dataObject.changestats,
      chartColors: ["green", "red"],
    },
    default: {
      data: dataObject.stats,
      chartColors: [
        "#006400",
        "#ffbb22",
        "#ffff4c",
        "#f096ff",
        "#fa0000",
        "#b4b4b4",
        "#f0f0f0",
        "#0064c8",
        "#0096a0",
        "#00cf75",
        "#fae6a0",
      ],
    },
  };

  const { data, chartColors } =
    variableMapping[variable] || variableMapping.default;

  const labels = data.map((item) => item.layername);
  const dataValues = data.map((item) => item.ha);

  return {
    labels,
    datasets: [
      {
        label: "Area in ha",
        backgroundColor: chartColors,
        data: dataValues,
        tension: 0.25,
        fill: true,
        borderColor: "#002F6B80",
        borderWidth: 0,
        radius: "75%",
        cutout: "150",
        borderRadius: 20,
      },
    ],
  };
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

  const mangroveVariables = ["mangrovecover", "mangrovechange"];
  const landcoverVariables = ["landcover"];

  const setBarChart = async () => {
    const polygon = store.getCustomPolygon;
    const layer = rasterstore.getLayerName;
    const selectedyear = rasterstore.getSelectedYear;

    const params =
      layer === "landcover"
        ? { geometry: polygon, year: selectedyear }
        : { geometry: polygon };

    const fetchData = async () => {
      const response = await axios.post(
        `https://geoportal.gmes.ug.edu.gh/ee/api/${layer}stats`,
        // `http://localhost:3000/api/${layer}stats`,
        params,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    };

    const dataObject = await fetchData();
    if (process.env.DEV) console.log(dataObject);

    const variables =
      layer === "landcover" ? landcoverVariables : mangroveVariables;

    for (const variable of variables) {
      try {
        const chartData = fetchRasterStats(dataObject, variable);
        if (process.env.DEV) console.log(chartData);
        store.updateChartData(variable, chartData);
      } catch (error) {
        const errorMessage = dataObject.message.split(".")[2].trim() + ".";
        Notify.create({
          type: "negative",
          color: "primary",
          message: `The selected area is too large for processing. ${errorMessage}`,
        });
      }
    }
  };

  const setLineChart = async function () {
    let pixelInfo = store.getSelectedGrid;
    let filterDates = store.getfilterdates;

    for (const variable of oceanVariables) {
      const chartData = await fetchGridValues(
        filterDates,
        variable,
        pixelInfo.majorid,
        pixelInfo.minorid,
        pixelInfo.UniqueID
      );

      //a method to update the chart in the store
      store.updateChartData(variable, chartData);
    }
  };

  return {
    setLineChart,
    setBarChart,
  };
}
