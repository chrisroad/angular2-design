import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { HomeComponent }  from './home.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    {
  path: 'detail/:id',
  component: HeroDetailComponent
},
      {
        path: 'heroes',
        component: HeroesComponent
      },{
        path: 'home',
        component: HomeComponent
      },{
  path: 'dashboard',
  component: DashboardComponent
},
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    HomeComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
