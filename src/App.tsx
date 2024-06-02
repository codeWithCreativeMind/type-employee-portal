// App.tsx
import React from "react";
import "./App.css";

// component
import ServiceIntegration from "./components/serviceIntegration/ServiceIntegration";

// mockData
import { serviceIntegrationTempData } from "./mockData/tempServiceIntegration";

function App() {
  return (
    <div className="App">
      <ServiceIntegration IntegrationList={serviceIntegrationTempData} />
    </div>
  );
}

export default App;
