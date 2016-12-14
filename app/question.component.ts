import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import { Router } from '@angular/router';
import { MdTabGroup } from '@angular/material/tabs';
import {USER_DATA, USER } from './json/user';

declare var $: JQueryStatic;
@Component({
  selector: 'question-home',
  templateUrl: './dist/view/question.component.html'
})

export class QuestionComponent implements OnInit,OnDestroy {

  progress: number = 0;
  first: number = 0;
  third: number = 0;
  fifth: number = 0;
  seventh: number = 0;
  ninth: number = 0;
  person: string;
  progress_style:string;
  current_Node_Id: any = {};

  show_progress: boolean = true;

  constructor(private router: Router) {
    this.current_Node_Id ={prev_id: null, id: 'first_section', next_id: 'second_section'};
  }

  ngOnInit() {
    // $(this.location_name.nativeElement).material_select();
    $('textarea').trigger('autoresize');
    $('.modal-trigger').leanModal();
    disableScroll();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    // $('.carousel').carousel({full_width: true});
  }

  ngOnDestroy(){
    console.log('destroy')
    enableScroll();
  }

  closeModal(){
     $('#modal1').closeModal();
  }

  setProgress(number: number){
    this.progress = this.progress + number;
    if(this.progress > 100){
      this.progress = 100;
    }
    this.progress_style = `${this.progress}%`;
  }

  firstSectionConfirm(next2_id:string, id:string, next_id:string, flag:boolean , event: any){
    if(flag == true){
      this.scroll(id, next_id);
      this.first = 1;
    }else{
      this.scroll(id, next_id);
      this.first = 2;
    }
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  secondSectionConfirm(next2_id:string, id:string, next_id:string, person:string){
    switch (person) {
      case "developer":
        // implement developer
        this.person = person;
        this.scroll(id, next_id);
        break;
      case "marketer":
        // implement marketer
        this.person = person;
        this.scroll(id, next_id);
        break;
      case "other":
        // implement other
        this.person = person;
        this.scroll(id, next_id);
        break;
      case "designer":
        // implement designer
        this.person = person;
        this.scroll(id, next_id);
        break;
      case "owner":
        // implement business owner
        this.person = person;
        this.scroll(id, next_id);
        break;
      default:
        break;
    }
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  thirdSectionConfirm(next2_id:string, id:string, next_id:string, flag:boolean){
    if(flag == true){
      this.scroll(id, next_id);
      this.third = 1;
    }else{
      this.scroll(id, next_id);
      this.third = 2;
    }
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  fourthSectionConfirm(next2_id:string, id:string, next_id:string){
    this.scroll(id, next_id);
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  fifthSectionConfirm(next2_id:string, id:string, next_id:string, flag:boolean){
    if(flag == true){
      this.scroll(id, next_id);
      this.fifth = 1;
    }else{
      this.scroll(id, next_id);
      this.fifth = 2;
    }
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  sixthSectionConfirm(next2_id:string, id:string, next_id:string){
    this.scroll(id, next_id);
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  seventhSectionConfirm(next2_id:string, id:string, next_id:string, flag:boolean){
    if(flag == true){
      this.scroll(id, next_id);
      this.seventh = 1;
    }else{
      this.scroll(id, next_id);
      this.seventh = 2;
    }
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  eighthSectionConfirm(next2_id:string, id:string, next_id:string){
    this.scroll(id, next_id);
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  ninthSectionConfirm(next2_id:string, id:string, next_id:string, flag:boolean){
    if(flag == true){
      this.scroll(id, next_id);
      this.ninth = 1;
    }else{
      this.scroll(id, next_id);
      this.ninth = 2;
    }
    this.setProgress(12);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  tenthSectionConfirm(next2_id:string, id:string, next_id:string){
    this.scroll(id, next_id);
    this.setProgress(11);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  elevenSectionConfirm(next2_id:string, id:string, next_id:string){
    this.scroll(id, next_id);
    this.setProgress(10);
    this.current_Node_Id = {prev_id: id, id:next_id, next_id: next2_id};
  }

  pageDownScroll(){
    let {prev_id, id, next_id} = this.current_Node_Id;
    console.log(prev_id)
    console.log(id)
    console.log(next_id)
    if(next_id == null) return;
    this.scroll(id, next_id);
  }

  pageUpScroll(){
    let {prev_id, id, next_id} = this.current_Node_Id;

    this.scrollUp(prev_id, id);
  }

  scrollUp(prev_id:string, id:string){
    setTimeout(() => {
      this.smoothScroll(prev_id);
      this.giveClass(id, prev_id);
    }, 500);
  }

  scroll(id:string, next_id:string){
    setTimeout(() => {
      this.smoothScroll(next_id);
      this.giveClass(id, next_id);
    }, 500);
  }

  giveClass(id:string, next_id:string){
    document.getElementById(id).classList.add('disabled');
    document.getElementById(next_id).classList.remove('disabled');
  }

  scrollTo(yPoint: number, duration: number) {
    setTimeout(() => {
      window.scrollTo(0, yPoint)
    }, duration);
    return;
  }

  smoothScroll(eID:string) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID) - 10;
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      window.scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 100);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        this.scrollTo(leapY, timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for (var i = startY; i > stopY; i -= step) {
      this.scrollTo(leapY, timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  }
}


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID:string) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = <HTMLElement>node.offsetParent;
        y += node.offsetTop;
    } return y;
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e:any) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e:any) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function preventDisable(e:any) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = true;
}

function preventDisableForScrollKeys(e:any) {
    if (keys[e.keyCode]) {
        preventDisable(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDisable, false);
  window.onwheel = preventDisable; // modern standard
  window.onmousewheel = document.onmousewheel = preventDisable; // older browsers, IE
  window.ontouchmove  = preventDisable; // mobile
  document.onkeydown  = preventDisableForScrollKeys;
}
