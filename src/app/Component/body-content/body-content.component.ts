import { Component } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent {
  menuId:number = 0;
  constructor( private menuService:MenuService) { }
  ngOnInit() {

    this.menuService.menuState.subscribe((menuNumber) => {
            this.menuId = menuNumber;
    });

}

}
