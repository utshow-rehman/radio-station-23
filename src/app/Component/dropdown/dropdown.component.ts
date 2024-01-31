import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  countries = [
    { code: 'AR', name: 'Arkansas', flag: 'path_to_arkansas_flag.png', stations: '334,444' },
    { code: 'BD', name: 'Bangladesh', flag: 'path_to_bangladesh_flag.png', stations: '56' },
    // ... Add other countries here
  ];

  selectedCountry = this.countries[0]; // Default selection

  onSelectCountry(country:any): void {
    this.selectedCountry = country;
  }
}
