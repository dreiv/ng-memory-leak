import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  randomValue = 0;

  constructor(private dummyService: DummyService) {
  }

  ngOnInit(): void {
    this.dummyService.$some.subscribe(value => {
      this.randomValue = value;
    })
  }

}
