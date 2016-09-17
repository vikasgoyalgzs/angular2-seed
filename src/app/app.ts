import {Component} from '@angular/core';

@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  isLoading = false;

  ngAfterViewInit() {
    setTimeout(() => this.load());
  }

  load() {
    this.isLoading = true;
  }
}
