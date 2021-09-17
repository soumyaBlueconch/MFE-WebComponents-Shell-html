import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebApp1Component } from './web-app1/web-app1.component';
import { WebApp2Component } from './web-app2/web-app2.component';

const routes: Routes = [
  { path: '', redirectTo: 'w1', pathMatch: 'full' },
  {path:'w1',component:WebApp1Component},
  {path:'w2',component:WebApp2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
