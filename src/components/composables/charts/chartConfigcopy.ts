import 'chartjs-adapter-date-fns';
import {de} from 'date-fns/locale';

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
}

export const options = {
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
      display: false,
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
