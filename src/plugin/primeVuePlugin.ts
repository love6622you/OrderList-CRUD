import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// Component
import DataTable from "primevue/datatable";
import Card from "primevue/card";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import DialogService from "primevue/dialogservice";
import DynamicDialog from "primevue/dynamicdialog";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";

export default {
  install: (app: any) => {
    app.use(PrimeVue);
    app.use(DialogService);

    const components = {
      DataTable,
      Card,
      Column,
      Button,
      Dialog,
      DynamicDialog,
      InputNumber,
      InputText,
      RadioButton
    };

    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};
