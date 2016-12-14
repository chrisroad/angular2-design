import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { MaterialModule } from '@angular/material';
import {AgGridModule} from 'ag-grid-ng2/main';
import {ModalModule} from "ng2-modal";
import {DndModule} from 'ng2-dnd';
import {DropdownModule} from 'ng2-dropdown';
import {Md2AccordionModule} from 'md2-accordion';
import {Md2MenuModule} from 'md2-menu';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AppComponent }        from './app.component';
import { SurveyComponent }        from './survey.component';
import { QuestionComponent }        from './question.component';
import { LoginComponent }      from './login.component';
import { AccordionDemo }  from './accordion-demo.component';
import { myfilterletter } from './filterletter';
import { MenuComponent }  from './menu.component';
import { AltQuestionComponent } from './alt.question.component';
import { SurveyListComponent } from './surveylist.component';

import { GfxService } from './service/gfx.service';
import { HttpClient } from './service/http-client.service';
import { SurveyService } from './service/survey.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withNg2ComponentSupport(),
    ModalModule,
    DndModule.forRoot(),
    Md2AccordionModule,
    Md2MenuModule,
    Ng2AutoCompleteModule,
    InfiniteScrollModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'accordion',
        component: AccordionDemo
      },
      {
        path: 'welcome',
        component: SurveyComponent
      },
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: 'alt_question',
        component: AltQuestionComponent
      },
      {
        path: 'survey_list',
        component: SurveyListComponent
      }
    ])
  ],
  declarations: [
    myfilterletter,
    AppComponent,
    LoginComponent,
    AccordionDemo,
    MenuComponent,
    QuestionComponent,
    SurveyComponent,
    AltQuestionComponent,
    SurveyListComponent
  ],
  providers: [
    GfxService,
    HttpClient,
    SurveyService,
    myfilterletter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
