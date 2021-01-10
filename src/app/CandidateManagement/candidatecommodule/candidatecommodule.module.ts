import { CandidatehomeComponent } from './../candidatehome/candidatehome.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent,
    CandidatehomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    CandidatehomeComponent
  ]
})
export class CandidatecommoduleModule { }
