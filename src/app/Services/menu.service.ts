import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuNumber = new BehaviorSubject<number>(1); 
  public menuState = this.menuNumber.asObservable();
  constructor() { }
  setMenuNumber(num:number): void {
    this.menuNumber.next(num);
  }
}
