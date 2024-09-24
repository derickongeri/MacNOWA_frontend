export default function createLegend() {
  const landCover = {
    palette: [
      "#006400",
      "#ffbb22",
      "#ffff4c",
      "#f096ff",
      "#fa0000",
      // "#b4b4b4",
      "#f0f0f0",
      "#0064c8",
      "#0096a0",
      "#00cf75",
      "#fae6a0",
    ],
    names: [
      "Tree cover",
      "Shrubland",
      "Grassland",
      "Cropland",
      "Built-up",
      "Bare / sparse vegetation",
      // "Snow and ice",
      "Permanent water bodies",
      "Herbaceous wetland",
      "Mangroves",
      "Moss and lichen",
    ],
  };

  const mangrove = {
    palette: ["#04ff17", "red", "green"],
    names: ["mangrove 2015 - 2020", "Loss", "Gain"],
  };

  const makeLegend = (layer) => {
    let LegendData = [];
    for (let i = 0; i < layer.names.length; i++) {
      LegendData.push({ landcover: layer.names[i], color: layer.palette[i] });
    }
    return LegendData;
  };

  const setLegendColors = function (rasterName) {
    let legendData = [];
    switch (rasterName) {
      case "landcover":
        legendData = makeLegend(landCover);
        break;
      case "mangrove":
        legendData = makeLegend(mangrove);
        break;
      default:
        legendData = makeLegend(landCover);
    }
    return legendData;
  };

  return {
    setLegendColors,
  };
}




