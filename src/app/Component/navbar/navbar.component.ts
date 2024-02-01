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
  enableDarkmode() {
    this.checked = this.checked ? false : true;
    console.log(this.checked, 'checked');
    if (this.checked) {
      document.documentElement.style.setProperty('--bg-body', '#242a30');
      document.documentElement.style.setProperty('--card-bg', '#404142');
      document.documentElement.style.setProperty('--card-color', '#fff');
      document.documentElement.style.setProperty('--color-gray', '#bcc0c4');
    } else {
      document.documentElement.style.setProperty('--bg-body', '#f1f1f1');
      document.documentElement.style.setProperty('--card-bg', '#fff');
      document.documentElement.style.setProperty('--card-color', '#212529');
      document.documentElement.style.setProperty('--color-gray', 'gray');
    }
  }
}
