export const data = {
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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 24,
      },
    },
  },
};
