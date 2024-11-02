import React from "react";
import { ToolScreen } from "./screens/toolScreen";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToolScreen />
      <Footer />
    </div>
  );
};

export default App;
