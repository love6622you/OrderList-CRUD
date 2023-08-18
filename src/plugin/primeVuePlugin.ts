import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// Component
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Column from "primevue/column";

export default {
  install: (app: any) => {
    app.use(PrimeVue);

    const components = { DataTable, Card, Column };

    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};
