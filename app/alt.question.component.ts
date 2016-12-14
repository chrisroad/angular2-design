import {Component, ViewContainerRef,ViewChild ,AfterViewInit ,OnDestroy , OnInit} from '@angular/core';
import {CommonModule} from "@angular/common"
import { FormsModule }    from '@angular/forms';
import {GridOptions} from 'ag-grid/main';
import { Router } from '@angular/router';
import { MdTabGroup } from '@angular/material/tabs';
import {USER_DATA, USER } from './json/user';
import {AgEditorComponent} from 'ag-grid-ng2/main';
import { BrowserModule }  from '@angular/platform-browser';

declare var $: JQueryStatic;

@Component({
  selector: 'alt-question-home',
  templateUrl: './dist/view/alt.question.component.html'
})

export class AltQuestionComponent implements OnInit, AfterViewInit  {

  questionEnvList: any[];
  questionProList: any[];

  answerOneVal: string='';
  answerTwoVal: string='';
  answerThreeVal: string=''
  answerFourVal: string=''
  answerFiveVal: string=''
  answerSixVal: string=''
  answerSevenVal: string=''
  answerEightVal: string=''
  answerNineVal: string=''

  @ViewChild('questionOneSelectBox') questionOneSelectBox: any;
  @ViewChild('questionTwoSelectBox') questionTwoSelectBox: any;
  @ViewChild('questionThreeSelectBox') questionThreeSelectBox: any;
  @ViewChild('questionFourInputBox') questionFourInputBox: any;
  @ViewChild('questionFiveSelectBox') questionFiveSelectBox: any;
  @ViewChild('questionSevenSelectBox') questionSevenSelectBox: any;
  @ViewChild('questionNineSelectBox') questionNineSelectBox: any;

  constructor(private router: Router) {
    this.questionEnvList = [
      {
        question: 'Were you able to learn how to get started with GFX International Survey?',
        value: 'YES',
        description: ''
      },
      {
        question: 'Would you say you are?',
        value: 'Developer',
        description: ''
      },
      {
        question: 'Did GFX International Survey function as you expected it to?',
        value: 'YES',
        description: ''
      },
      {
        question: 'In what ways did it not function as expected?',
        value: '',
        description: ''
      },
      {
        question: "Was there anything you couldn't figure out how to do?",
        value: 'NO',
        description: ''
      },
    ];

    this.questionProList = [
      {
        question: "If you could share which things in particular , it could certainly help us as we look to build better documentataion and support?",
        value: '',
        description: ''
      },
      {
        question: "Were there any features that were missing that you required or desired?",
        value: 'YES',
        description: ''
      },
      {
        question: "If you have any additional comments, you'd like to share with us that could help influence the growth of GFX International Survey , we'd love to hear them.",
        value: '',
        description: ''
      },
      {
        question: "As we grow and add additional features and support , would you like us to keep you in the loop?",
        value: 'YES',
        description: ''
      },
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(this.questionOneSelectBox.nativeElement).material_select();
    $(this.questionTwoSelectBox.nativeElement).material_select();
    $(this.questionThreeSelectBox.nativeElement).material_select();
    $(this.questionFiveSelectBox.nativeElement).material_select();
    $(this.questionSevenSelectBox.nativeElement).material_select();
    $(this.questionNineSelectBox.nativeElement).material_select();

    $(this.questionOneSelectBox.nativeElement).change(() => {
      this.answerOneVal = $(this.questionOneSelectBox.nativeElement).val();
    });
    $(this.questionTwoSelectBox.nativeElement).change(() => {
      this.answerTwoVal = $(this.questionTwoSelectBox.nativeElement).val();
    });
    $(this.questionThreeSelectBox.nativeElement).change(() => {
      this.answerThreeVal = $(this.questionThreeSelectBox.nativeElement).val();
    });
    $(this.questionFiveSelectBox.nativeElement).change(() => {
      this.answerFiveVal = $(this.questionFiveSelectBox.nativeElement).val();
    });
    $(this.questionSevenSelectBox.nativeElement).change(() => {
      this.answerSevenVal = $(this.questionSevenSelectBox.nativeElement).val();
    });
    $(this.questionNineSelectBox.nativeElement).change(() => {
      this.answerNineVal = $(this.questionNineSelectBox.nativeElement).val();
    });
  }
}
