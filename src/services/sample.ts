import {AxiosInstance} from 'axios';
import axiosInstance from './axios';

const url = 'https://api.ip.pe.kr/json/';

class SampleService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axiosInstance();
  }

  async getIpAddress() {
    let response = await this.instance.get(url, {});

    return response.data.ip;
  }
}

let sampleServiceInstance: SampleService;

//Single pattern
export const SampleInstance = (): SampleService => {
  if (sampleServiceInstance === undefined) {
    sampleServiceInstance = new SampleService();
  }

  return sampleServiceInstance;
};
