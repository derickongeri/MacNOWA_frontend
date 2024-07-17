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
      display: false
    }
  },
};
