import "chartjs-adapter-date-fns";
import { de } from "date-fns/locale";

function datesTwoWeeksBack() {
  let datesList = [];
  let today = new Date();

  // Loop to generate dates for the past two weeks
  for (let i = 0; i < 14; i++) {
    let date = new Date(today);
    date.setDate(today.getDate() - i);

    // Format date as 'dd-MM-yyyy'
    let formattedDate = `${("0" + date.getDate()).slice(-2)}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${date.getFullYear()}`;

    datesList.push(formattedDate);
  }

  return datesList.reverse();
}

export const data = {
  labels: datesTwoWeeksBack(),
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40, 40, 39, 10, 40, 39, 80, 40],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
      limits: {
        // axis limits
      },
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
    },
    legend: {
      display: false,
    },
    filler: {
      propagate: true,
    },
  },
};

export const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: "auto",
      anchor: "center",
      align: "center",
      offset: 4,
      opacity: 0.7,
      formatter: (val, ctx) => {
        // Grab the label for this value
        const label = ctx.chart.data.labels[ctx.dataIndex];

        // Format the number with 2 decimal places
        const formattedVal = Intl.NumberFormat("en-US", {
          minimumFractionDigits: 1,
        }).format(val);

        // Put them together
        return `${formattedVal} Ha`;
      },
      borderRadius: 5,
      leftborderWidth: 2,
      borderColor: ["#b71c1c", "#2e7d32", "#fff9b4"],
      color: "#404040",
      size: "8",
      backgroundColor: "#fff",
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        font: {
          fontColor: "#EEEEEE",
        },
        usePointStyle: true,
        padding: 25,
      },
    },
    title: {
      display: false,
      align: "start",
      text: "Crop Area in Ha",
      position: "top",
      color: "#404040",
    },
  },
};
