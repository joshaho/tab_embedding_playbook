import { users } from './users';
import { Deere } from "components/Themes/Deere";
import { Ebikes } from "components/Themes/Ebikes";
import { NTO } from "components/Themes/NTO";


export const settings = {
  ai_chat: true,
  custom_metrics: true,
  themes: [
    {
      label: "Analytics Output Port",
      name: "superstore",
      component: Deere,
      type: "default",
      logo: "superstore.png",
      styles: "",
      project: {
        name: "superstore_embedded",
        workbooks: [],
        data_sources: []
      }
    }
  ],
  demo_users: users
}
