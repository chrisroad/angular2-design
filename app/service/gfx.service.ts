import { Injectable }    from '@angular/core';
import { HttpClient } from './http-client.service';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class GfxService {
  httpClient: HttpClient;
  containerType = "Item";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  login(name: string, pass: string): Promise<String> {
    let body = "username=" + name + "&password=" + pass + "&rememberMe=false";
    return this.httpClient.login_post(this.httpClient.getRootUrl() + "Account/Auth", body)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  
  setCookie(cookie: string) {
    this.httpClient.setCookie(cookie);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
