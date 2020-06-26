import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-sub *ngIf="show"></app-sub>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show = true;

  ngOnInit(): void {
    setInterval(
      () => this.show = !this.show,
      50
    );
  }
}
