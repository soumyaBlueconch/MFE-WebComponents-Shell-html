import { NgModule,Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebApp1Component } from './web-app1/web-app1.component';
import { WebApp2Component } from './web-app2/web-app2.component';
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    WebApp1Component,
    WebApp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('web-comp2', el);
  }
  ngDoBootstrap(appRef: ApplicationRef) { 
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
 }
