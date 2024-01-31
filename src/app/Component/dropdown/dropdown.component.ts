import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { RadioBrowseApiService } from 'src/app/Services/radio-browse-api.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() placeHolder: string = 'Placeholder';

  stateCtrl = new FormControl('');
  filteredData: Observable<any[]> = of([]);

  constructor(private radioBrowserService: RadioBrowseApiService) {}
  ngOnInit() {
    this.radioBrowserService.getCountries().subscribe({
      next: (data) => {
          console.log(data);
          
        this.filteredData = this.stateCtrl.valueChanges.pipe(
          startWith(''),
          map(value => {
            let stringValue = value ?? '';
            return  stringValue;
          }),
          map(name => name ? this.filterCountries(name, data) : data.slice())
        );
        
      },
      error: (error) => {
        console.error('Error fetching countries', error);
      }
    });
  }

  private filterCountries(value: string, countries: any[]): any[] {
   
    
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    
    return countries.filter(country => country.country.toLowerCase().includes(filterValue));
  }

}
