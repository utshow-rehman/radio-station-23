import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/Services/drawer.service';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private drawerService: DrawerService, private menuService:MenuService) { }
  selectedMenu:number = 1;
  ngOnInit() {

      this.drawerService.drawerState.subscribe((isOpen) => {
        if (isOpen) {
          this.drawer.open();
        } else {
          this.drawer.close();
        }
      });
 
  }

  slectMenu(value:number){
      this.selectedMenu = value;
      this.menuService.setMenuNumber(value);
  }

}
