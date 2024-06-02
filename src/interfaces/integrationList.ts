export interface Product {
    productId: string;
    productName: string;
    productShortDesc: string;
  }
  
  export interface productDetailsIntegrationData {
    IntegrationList: {
      products: Product[];
    };
  }