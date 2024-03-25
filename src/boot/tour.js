import { boot } from "quasar/wrappers";
import VueTour from "v3-tour";
import "v3-tour/dist/vue-tour.css";

export default boot(async ({ app }) => {
  app.use(VueTour);
});
