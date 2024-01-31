import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   @Input() station:any;
   tagList: string[] = [];
   ngOnInit() {
    if (this.station && this.station.tags) {
      this.tagList = this.station.tags.split(',');
    }

   }

}
