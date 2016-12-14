import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
  http: Http;
  // rootUrl = "https://test-a.gfxsymphony.com/panera/";
  rootUrl = "https://localhost:15079/v1/Api/panera/";
  cookie: string = '';
  
  constructor(http: Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  
  setCookie(cookie: string){
    this.cookie = cookie;
  }

  getRootUrl() {
    return this.rootUrl;
  }

  get(url: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      // withCredentials: true,
      headers: headers
    });
  }

  post(url: string, data:any) {
    let headers = new Headers();
    headers.append('Cookie',this.cookie);
    // this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      withCredentials: true,
      headers: headers
    });
  }
  
  login_post(url: string, data: string) {
    let headers = new Headers();
    // headers.append('Cookie',this.cookie);

    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      // withCredentials: true,
      headers: headers
    });
  }
}
