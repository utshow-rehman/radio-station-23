import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FilterService } from 'src/app/Services/filter.service';
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
  latestData:any[] = [];


  private subscription = new Subscription();

  constructor(private radioBrowserService: RadioBrowseApiService, private filterService:FilterService) {}
  ngOnInit() {
    if(this.placeHolder === 3){
   this.subscription.add(this.stateCtrl.valueChanges.subscribe(value => {
   
    
      if (value === '' || value === null) {
        this.filterService.setFilterValueAndId('', 0);
      }
      else{
            if(this.placeHolder === 3){
              this.filterService.setFilterValueAndId(value,3);
            }
      }
      
    }));
  }
       if(this.placeHolder === 1){
            this.placeHolderValue = "Find by country";
            this.filterBySelectValue(1);
       }
      else if(this.placeHolder === 2){
        this.placeHolderValue = "Find by language";
        this.filterBySelectValue(2);
      }
     else if(this.placeHolder === 3){
           this.placeHolderValue = "Search by name";
       }

  
  }

  filterBySelectValue(id:number):void{
   
    this.subscription.add(this.radioBrowserService.getAllData(id).subscribe({
      next: (data) => {
           this.latestData = data;
           if(this.placeHolder ===1 || this.placeHolder === 2){
        this.filteredData = this.stateCtrl.valueChanges.pipe(
          startWith(''),
          map(value => {
            let stringValue = value ?? '';
            return  stringValue;
          }),
          map(name => name ? this.filterCountries(name, data) : data.slice())
        );
        }
       
      },
      error: (error) => {
        console.error('Error fetching countries', error);
      }
    }));
  }

  private filterCountries(value: string, data: any[]): any[] {
   
    let stringValue = value ?? '';
    const filterValue = stringValue.toLowerCase();  
    return data.filter(data => (data.name?.toLowerCase() ?? "").includes(filterValue));

  }

  onOptionSelected(event:any) {
       
      if(this.placeHolder === 1){
       const foundItem = this.latestData.find(item => item.name === event.option.value);
         this.filterService.setFilterValueAndId(foundItem.iso_3166_1,1);
      }
      else if(this.placeHolder === 2){
        this.filterService.setFilterValueAndId(event.option.value,2);
      }
    
  }
  ngOnDestroy() {
   
    this.subscription.unsubscribe();
  }

}
