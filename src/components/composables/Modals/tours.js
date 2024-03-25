export default {
  steps: [
    {
      target: "#mapid",
      content: "This is the first step",
    },
    {
      target: ".selectByClass",
      content: "This is the second step, placed on the bottom of the target",
      placement: "bottom",
    },
    {
      target: '[data-step="3"]',
      content: "This is the third step",
    },
  ],
};
