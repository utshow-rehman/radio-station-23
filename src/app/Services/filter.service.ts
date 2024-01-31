import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterInterface } from '../Interfaces/FilterInterface';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterStateSubject = new BehaviorSubject<FilterInterface>({
    filterValue: "",
    filterId: 0
  });
    public filterState = this.filterStateSubject.asObservable();
  constructor() { }
  setFilterValueAndId(filterValue: string, filterId: number): void {
    const newState: FilterInterface = {
      filterValue: filterValue,
      filterId: filterId
    };
    this.filterStateSubject.next(newState);
  }
}
