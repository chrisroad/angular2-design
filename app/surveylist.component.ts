import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { USER_DATA, USER } from './json/user';
import { GfxService } from './service/gfx.service';
import { SurveyService } from './service/survey.service';

@Component({
  selector: 'survey-list',
  templateUrl: './dist/view/surveylist.component.html',
})

export class SurveyListComponent {
  public lists: any = USER_DATA;

  constructor(private router: Router, private surveyService: SurveyService) {
    // this.surveyService.ListJson().then((res) => {
    //   this.lists = res;
    // })

    this.lists = { "root": [{ "Code": "355c0dcf-2e5a-41e8-ae49-2530724b56ce", "Name": "testSurveyDDD" }, { "Code": "6f4581f5-930b-49b1-a381-fb816186a23c", "Name": "JK Testing Survey" }, { "Code": "a49bc72a-3cda-4837-9e7f-468b3ab66be6", "Name": "JK Test Survey 22" }, { "Code": "a73b61a5-2dde-45ae-b184-6428824f0a83", "Name": "test hasee" }, { "Code": "7057815c-c0a7-469e-87e8-6dbc2263bafe", "Name": "names112" }, { "Code": "d26000af-218a-44bd-9abc-cc1b029eadd9", "Name": "name" }, { "Code": "bfa8aa4e-f5e7-4b73-93d0-f9d45203d93a", "Name": "JK  Test 2" }, { "Code": "a26daf9b-e69b-4e0f-b5f4-dbccd8bde4b9", "Name": "name" }, { "Code": "8e35b387-436a-4770-9d06-bf2905a63db3", "Name": "name" }, { "Code": "cd43424f-abe2-4dbb-8db9-d9287bdb125d", "Name": "test" }, { "Code": "d5ca0ed8-f7b4-4cb7-9458-3f0d0e992f80", "Name": "test" }, { "Code": "bfabadbc-de52-4cde-a1e5-accd148cd5fc", "Name": "name" }, { "Code": "01be1e65-30f3-46ff-be6c-f81f63681c59", "Name": "name" }, { "Code": "702c1640-6e4b-415b-a9c8-a4d5fed301d0", "Name": "name" }, { "Code": "c5d8c927-8a78-4763-89f1-4e5feb610c56", "Name": "name" }, { "Code": "e07ed8e2-ceca-4ea2-b944-1d928ad975e7", "Name": "name" }, { "Code": "bc5b6ebe-81e8-4657-8941-e83678b6df21", "Name": "name" }, { "Code": "e466fb2f-0c89-4ad7-8ec7-51b17520a324", "Name": "name" }, { "Code": "96383ed0-41a2-4ce1-b17b-28ad13689bc8", "Name": "dd" }, { "Code": "d61ddf2d-0d0c-425d-a6cd-791f0f664fc5", "Name": "name" }, { "Code": "b7e2c0b9-0fc4-401d-8537-afab4f3e0eaa", "Name": "fff" }, { "Code": "5a036ed3-8798-4996-9174-a1f1586c8fd1", "Name": "6 Bit Survey Section Test" }, { "Code": "af267e01-3dd9-4d9c-9348-0e56220b05b2", "Name": "demo" }, { "Code": "04db2853-e00b-4a85-acd7-2888e51223ac", "Name": "demo1" }, { "Code": "5273e50d-e79e-4b0e-a50c-b5eabe4246d3", "Name": "demo2" }], "totalCount": 25, "metaData": { "fields": [{ "name": "Code", "mapping": "Code", "type": "Unknown" }, { "name": "Name", "mapping": "Name", "type": "Text" }], "root": "root", "totalProperty": "totalCount" } }
    // console.log(this.lists.root);
    console.log(this.lists)
  }

  gotoPage(event: any, code: string){
    localStorage.setItem('code', code);
    this.router.navigate(['welcome']);
  }
}
