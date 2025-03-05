import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./modules/header";
import Info from "./modules/Info";
import Education from "./modules/Education";
import Experience from "./modules/Experience";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <div className="display">
      <Info />
      <Education />
      <Experience />
    </div>
  </>,
);
