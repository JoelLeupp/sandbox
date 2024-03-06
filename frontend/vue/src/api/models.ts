import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { Food } from './interfaces';
import { FoodRequest } from './requestInterfaces';

export interface IFrontendUser {
  /**
   * Example API
   */
  getFood(request: FoodRequest): Promise<Food[]>;
}

export class FrontendUser implements IFrontendUser {
  private instance: AxiosInstance;
  private baseUrl: string;

  constructor(baseUrl?: string, instance?: AxiosInstance) {
    this.instance = instance ? instance : axios.create();

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  protected getResults<T>(response: AxiosResponse): Promise<T> {
    const status = response.status;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }

    if (status === 200) {
      const result200: any = response.data;
      return Promise.resolve<T>(result200);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<T>(null as any);
  }

  /**
   * Example API
   */
  getFood(request: FoodRequest): Promise<Food[]> {
    let url_ = this.baseUrl + '/data/foods.json';
    url_ = url_.replace(/[?&]$/, '');
    const content_ = JSON.stringify(request);
    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      data: content_,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processGetFood(_response);
      });
  }

  protected processGetFood(response: AxiosResponse): Promise<Food[]> {
    return this.getResults<Food[]>(response);
  }
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
  return obj && obj.isAxiosError === true;
}
