import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'accordion-demo',
  templateUrl: '../view/accordion-demo.html'
})
export class AccordionDemo {
  private accordions: Array<any> = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', active: true },
    { title: 'Dynamic Title 4', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 5', content: 'Dynamic content 2' },
    { title: 'Dynamic Title 6', content: 'Dynamic content 3' }
  ];

  multiple: boolean = false;
}