import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isDrawerOpen: boolean = true; // The drawer is open by default

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
