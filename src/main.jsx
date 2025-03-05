import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./modules/header";
import Info from "./modules/Info";
import Education from "./modules/Education";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Info />
    <Education />
  </>,
);
