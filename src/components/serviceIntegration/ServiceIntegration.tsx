// components/serviceIntegration/ServiceIntegration.tsx
import React from "react";

/// interface

import { productDetailsIntegrationData } from "../../interfaces/integrationList";

import { Product } from "../../interfaces/integrationList";

import "./serviceIntegration.css";
import { DataManager } from "../../services/apiRequest";

const ServiceIntegration: React.FC<productDetailsIntegrationData> = ({
  IntegrationList,
}) => {
  // const region = "in";
  // const environment = "dev";
  const region = "jsonplaceholder";
  const environment = "typicode";
  const dataManager = new DataManager(region, environment);

  dataManager.getServiceIntegration().then((res) => {
    console.log("dataManager :::::", res);
  });

  return (
    <div className="integration-card-container">
      {IntegrationList.products &&
        IntegrationList.products?.map((item: Product) => (
          <div className="cardBoxContainer">
            <p>{item.productName}</p>
          </div>
        ))}
    </div>
  );
};

export default ServiceIntegration;
