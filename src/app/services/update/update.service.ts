import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }

  private subjectName = new Subject<any>();

  sendUpdate(): void {
    this.subjectName.next();
  }

  getUpdate(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
