import { Injectable } from '@angular/core';
import { TrackInterface } from '../Interfaces/TrackInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayTrackService {
  private tackSubject = new BehaviorSubject<TrackInterface>({
    track: "",
    stationName: ""
  });
  constructor() { }
   public trackState = this.tackSubject.asObservable();
   setTrack(track: string, stationName: string): void {
    const newState: TrackInterface = {
      track: track,
      stationName: stationName
    };
    this.tackSubject.next(newState);
  }
}
