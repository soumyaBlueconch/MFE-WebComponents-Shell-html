import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'angular-web-component';
  @Input() msgFromShellApp: any;
  ngOnChanges() {
    if (this.msgFromShellApp) {
      console.log(this.msgFromShellApp);
    }
  }
}
