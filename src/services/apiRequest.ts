import axios, { AxiosInstance, AxioResponse } from "axios";

export class DataManager {
  private axiosInstance: AxiosInstance;
  constructor(
    private region: "jsonplaceholder" | "jsonplaceholder",
    private environment: "typicode" | "typicode" //   private region: "in" | "na", //   private environment: "dev" | "qa"
  ) {
    this.axiosInstance = axios.create({
      baseURL: `https://${this.region}.${this.environment}.com/posts`,
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US",
        Authorization: "token",
      },
    });
  }

  public async getServiceIntegration() {
    const res = await this.axiosInstance.get(
      `https://${this.region}.${this.environment}.com/posts`,
      { data: {} }
    );
    return res;
  }
}
