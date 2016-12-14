import {Injectable} from '@angular/core';
import {HttpClient} from './http-client.service';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SurveyService {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  ListJson(): Promise<String> {
    let url = this.httpClient.getRootUrl() + "SurveyJson/List";
    return this.httpClient.post(url, {}).toPromise()
      .then((res: any) => res.json());
  }

  LocationListJson(survey_code:string): Promise<String> {
    let body = {
      surveyCode: survey_code
    }, 
    url=this.httpClient.getRootUrl() + 'SurveyJson/Location/List';
    
    return this.httpClient.post(url, body).toPromise()
      .then((res: any) => res.json());
  }

  ViewJson(surveyCode: string, locationCode: string): Promise<String> {
    let body = {
      surveyCode: surveyCode,
      locationCode: locationCode
    }, 
    url=this.httpClient.getRootUrl() + 'SurveyJson/Location/View';
    
    return this.httpClient.post(url, body).toPromise()
      .then((res: any) => res.json());
  }

  SaveSurvey(surveyCode: string, locationCode: string, charactersitic: [{}]): Promise<String> {
    
    let body = {
      action: 'Save',
      surveyCode: surveyCode,
      locationCode: locationCode,
      jsonCharacteristicValues: JSON.stringify(charactersitic)
    },
    url = this.httpClient.getRootUrl() + 'SurveyJson/Save';
    return this.httpClient.post(url, body)
      .toPromise()
      .then((response: any) => response.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
