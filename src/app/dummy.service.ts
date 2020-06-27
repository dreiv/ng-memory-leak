import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  $some = new BehaviorSubject<number>(42);
}
