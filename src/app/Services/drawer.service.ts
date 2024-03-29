import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private isOpen = new BehaviorSubject<boolean>(true); // Default to open


  public drawerState = this.isOpen.asObservable();

  constructor() { }

  toggleDrawer(): void {
    this.isOpen.next(!this.isOpen.value);
  }
}
