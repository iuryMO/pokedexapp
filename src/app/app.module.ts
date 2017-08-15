import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpregoService } from "../services/emprego.service";
import { RouterModule, Routes } from '@angular/router';
import { EmpregoPesquisarComponent } from './emprego-pesquisar/emprego-pesquisar.component';

const appRoutes: Routes = [
  { path: 'emprego', component: EmpregoPesquisarComponent }
];

@NgModule({
  declarations: [AppComponent, EmpregoPesquisarComponent],

  imports: [BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes)],

  providers: [AppComponent, EmpregoService],

  bootstrap: [AppComponent]
})
export class AppModule { }
