import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesCreateComponent } from './issues-create/issues-create.component';

import { IssuesService } from './issues.service';

// Define the routes
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'issues',
    pathMatch: 'full'
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  { 
    path: 'issues-create', 
    component: IssuesCreateComponent 
  }

];

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssuesCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
