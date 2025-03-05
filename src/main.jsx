import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./modules/header";

import Info from "./modules/EditData";
import infoData from "./modules/data";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Info props={infoData}/>
  </>,
  
);
