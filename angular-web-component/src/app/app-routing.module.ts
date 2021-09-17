import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebComp1Component } from './web-comp1/web-comp1.component';

const routes: Routes = [
  {
    path: 'webC1', component: WebComp1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
