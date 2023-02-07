import React from "react";
import ReactDOM from "react-dom/client";
import Info from "components/Info";
import About from "components/About";
import Footer from "components/Footer";
import "./sass/main.scss";

const App = () => (
  <div className="page-container">
    <Info />
    <About />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
