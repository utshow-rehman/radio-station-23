import { Component } from '@angular/core';
import { DrawerService } from 'src/app/Services/drawer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
export class NavbarComponent {
  color = 'red';
  checked = false;
  disabled = false;

  constructor(private drawerService: DrawerService) { }

  toggleDrawer(): void {
    this.drawerService.toggleDrawer();
  }
}
