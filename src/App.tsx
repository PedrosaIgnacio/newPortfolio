import React from "react";
import { AppRouter } from "./router/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return <AppRouter />;
}
export default App;
