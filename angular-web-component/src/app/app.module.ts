import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { createCustomElement } from '@angular/elements';
import { WebComp1Component } from './web-comp1/web-comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WebComp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // to remove the error " The selector "app-root" did not match any elements"
  entryComponents: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('web-comp1', el);
  }
  ngDoBootstrap(appRef: ApplicationRef) { 
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
