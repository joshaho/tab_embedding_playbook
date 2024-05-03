import { Superstore, NTO, Deere} from "./Themes"

export const settings = {
  ai_chat: true,
  custom_metrics: true,
  themes: [
    {
      label: "Analytics Output Port",
      name: "supplychain",
      component: Deere,
      type: "default",
      logo: "deere.png",
      styles: "",
      project: {
        name: "supply_chain",
        workbooks: [],
        data_sources: []
      }
    },
    {
      label: "API Output Port",
      name: "nto",
      component: NTO,
      type: "developer",
      logo: "deere.png",
      styles: "",
      project: {
        name: "nto",
        workbooks: [],
        data_sources: []
      }
    },
    {
      label: "AI Output Port",
      name: "superstore",
      component: Superstore,
      type: "data science",
      logo: "deere.png",
      styles: "",
      project: {
        name: "superstore_embedded",
        workbooks: [],
        data_sources: []
      }
    },
  ]
}
