import { Component, ViewChild, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { Router } from '@angular/router';
import { MdTabGroup } from '@angular/material/tabs';
import { USER_DATA, USER } from './json/user';
import { SurveyService } from './service/survey.service';
import { GfxService } from './service/gfx.service';

declare var $: JQueryStatic;

@Component({
  selector: 'survey-home',
  templateUrl: './dist/view/survey.component.html'
})

export class SurveyComponent implements OnInit {

  @ViewChild('location_name') location_name: any;
  @ViewChild('agGridCharacteristics') agGridCharacteristics: any;

  private itemCh: any = {};
  private selectedIndex = 0;
  private gridOptions: GridOptions;
  private selectedRows: any[] = [];
  private selectedRowCount = 0;
  private selectedLocation: any;

  all_survey: any[] = [];
  locations: any[] = [];
  rowData: any[];
  columnDefs: any[];

  constructor(private router: Router, private surveyService: SurveyService, private gfxService: GfxService) {
    var survey_code: string = localStorage.getItem('code');
    // this.surveyService.LocationListJson(survey_code).then((res) => {
    //   this.all_survey = this.getSurveyLocationList(res);
    // })

    this.getSurveyLocationList('d');
    this.all_survey.map((d) => {
      this.locations.push(d.Name);
    })
    this.createRowData(1);
    this.columnDefs = this.createColumnDefs();

    this.itemCh = {
      "name": "tab1",
      "title": "Bread Wall",
      "id": 1,
      "selectedRowCount": 0,
      "selectedRows": [],
      "selecteAllRows": false,
      "gridOptions": <GridOptions>{}
    };

    console.log(this.rowData);
  }

  getSurveyLocationList(html_string: any) {
    this.surveyService.ListJson().then(
      (res) => {
        this.all_survey = res['root'];
      }
    )
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(this.location_name.nativeElement).material_select();

    $(this.location_name.nativeElement).change(() => {
      this.selectedValue($(this.location_name.nativeElement).val());
    });
  }

  selectedValue(value: any) {
    var rowData: any = [];

    let temp = this.all_survey.filter(function(d) {
      return d.Name.toLowerCase().indexOf(value) !== -1 || !value;
    });

    console.log(temp);

    temp.forEach((survey, index, arr) => {
      rowData.push({
        row: "Row " + index,
        location_name: survey.Name,
        street: survey.Street,
        city: survey.City,
        state: survey.State
      });
    });
    this.rowData = rowData;
  }

  onGotoQuestion() {
    this.router.navigateByUrl('/question');
  }

  gotoAltQuestion() {
    this.router.navigateByUrl('/alt_question');
  }

  onRowClicked(e: any) {
    if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch (actionType) {
        case "wizard":
          return this.onGotoQuestion();
        case "table":
          return this.onGotoQuestion();
        case "remove":
          return this.onGotoQuestion();
      }
    }
  }

  private onGridReady(tab: any) {
    //console.log(tab.selectedRows);
    let selectedRowData: any[] = [];
    for (var i = 0; i < tab.selectedRows.length; i++) {
      selectedRowData.push(tab.selectedRows[i].row)
    }
    tab.gridOptions.api.forEachNode(function(node: any) {
      for (let i = 0; i < selectedRowData.length; i++) {
        if (node.data.row == selectedRowData[i]) {
          node.setSelected(true);
        }
      }
    })

  }

  private onSelectionChanged(tab: any) {
    tab.selectedRows = tab.gridOptions.api.getSelectedRows();
    tab.selectedRowCount = tab.selectedRows.length;
  }

  private createRowData(id: number) {
    let rowData: any[] = [];
    this.all_survey.forEach((survey, index, arr) => {
      rowData.push({
        row: "Row " + index,
        location_name: survey.Name,
        street: survey.Street,
        city: survey.City,
        state: survey.State
      });
    });
    this.rowData = rowData;
  }

  private createColumnDefs() {
    return [
      { headerName: 'Location Name', field: "location_name", width: 200 },
      { headerName: 'Street', field: "street", width: 200 },
      { headerName: 'City', field: "city", width: 200 },
      { headerName: 'State', field: "state", width: 200 },
      {
        headerName: "Row", field: "row", width: 200, suppressSizeToFit: true,
        headerCellTemplate: `<span class="">Wizard</span>`,
        cellRendererFramework: {
          template: `
            <button class="btn orange darken-2 pan_actions_btn" data-action-type="wizard" id="loginbtn">
              Start
            </button>
          `
        }
      },
      {
        headerName: "Row", field: "row", width: 200, suppressSizeToFit: true,
        headerCellTemplate: `<span class="">Table</span>`,
        cellRendererFramework: {
          template: `
            <button class="btn orange darken-2 pan_actions_btn" data-action-type="table" id="loginbtn">
              Start
            </button>
          `
        }
      },
      {
        headerName: "Row", field: "row", width: 250, suppressSizeToFit: true,
        headerCellTemplate: `<span class=""></span>`,
        cellRendererFramework: {
          template: `
            <button class="btn orange darken-2 pan_actions_btn table-button" id="loginbtn" (click)="onLogin()">
              <i class="material-icons">print</i>
              Print
            </button>
          `
        }
      }
    ];
  }

}
