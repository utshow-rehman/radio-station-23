import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackInterface } from 'src/app/Interfaces/TrackInterface';
import { PlayTrackService } from 'src/app/Services/play-track.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  track:string ="";
  stationName:string="";
  song = new Audio();
  play:boolean = false;
  private subscription = new Subscription();

  constructor(private playTrackServices:PlayTrackService){}
  ngOnInit() {
    this.subscription.add(
        this.playTrackServices.trackState.subscribe((state: TrackInterface) => {
          this.track = state.track;
          this.stationName = state.stationName;
         if(this.track.length>0){
          this.song.src = this.track;
          this.song.load();
          this.song.play();
          this.play =true;
    
      }
      
    })
    );
  }
  playAndPause(){
    if(this.track.length>0){
       if(this.play){
           this.play = false;
           this.song.pause();
       }
       else{
        this.song.load();
        this.song.play();
        this.play =true;
       }
      }
  }

}
