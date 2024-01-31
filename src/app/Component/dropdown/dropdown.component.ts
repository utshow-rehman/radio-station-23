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
  @Input() placeHolder: number = 0;
  
  placeHolderValue:string = "PlaceHolder";

  stateCtrl = new FormControl('');
  filteredData: Observable<any[]> = of([]);

  constructor(private radioBrowserService: RadioBrowseApiService) {}
  ngOnInit() {
       if(this.placeHolder === 1){
            this.placeHolderValue = "Find by country";
            this.filterByCountry(1);
       }
      else if(this.placeHolder === 2){
        this.placeHolderValue = "Find by language";
        this.filterByCountry(2);
      }
     else if(this.placeHolder === 3){
       this.placeHolderValue = "Search by name";
       }

  
  }

  filterByCountry(id:number):void{
    this.radioBrowserService.getCountries(id).subscribe({
      next: (data) => {
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
    return countries.filter(country => country.country.toLowerCase().includes(filterValue));
  }

}
