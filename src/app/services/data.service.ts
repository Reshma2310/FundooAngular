import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private msgSource = new BehaviorSubject('');
  currentMsg = this.msgSource.asObservable();

  constructor() { }

  changeMsg(message: any) {
    this.msgSource.next(message)
  }
}
