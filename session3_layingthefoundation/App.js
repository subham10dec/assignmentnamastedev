import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderComponent from "./HeaderComponent";

const App = () => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
