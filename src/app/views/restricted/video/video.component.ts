import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.template.html',
  styleUrls: ['./video.styles.scss']
})
export class VideoComponent implements OnInit, AfterViewInit {

  @ViewChild('myvideo') myvideo;
  @ViewChild('progressBar') progressBar;
  
  private videoFeed = 'https://www.redbull.tv/video/AP-1TT2QFUHS2111/a-door-in-the-sky';
  public safeFeed;
  public vidHeight = '100%';
  public isPlaying = false;
  private vid;
  public progress = 0;
  public progressPct = '0%';
  private timeListener;
  public remaining = '00:00';
  public current = '00:00';
  public duration = '00:00';
  public volume: number;
  constructor(private sanitizer: DomSanitizer) {
  
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
    this.safeFeed = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoFeed);
    
  };
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    setTimeout(() => {
      this.vid = this.myvideo.nativeElement;
      this.vid.controls = false;
      this.vidHeight = this.vid.style.height;
    });
  };
  
  public play = () => {
    if(!this.isPlaying) {
      
      this.vid.play();
      this.isPlaying = true;
      const duration = this.getTime(this.vid.duration);
      this.duration = this.getFormattedTime(duration);
      this.volume = this.vid.volume;
    } else {
      
      this.vid.pause();
      this.isPlaying = false;
    }
    
  };
  
  public stop = () => {
    this.vid.pause();
    this.vid.currentTime = 0;
    this.isPlaying = false;
  };
  
  public updateTime = (e) => {
    this.progress = Math.floor((this.vid.currentTime / this.vid.duration) * 100);
    this.progressPct = `${this.progress}%`;

    const currentTime = this.getTime(this.vid.currentTime);
    const remainingTime = this.getTime(this.vid.duration - this.vid.currentTime);
    this.current = this.getFormattedTime(currentTime);
    this.remaining = this.getFormattedTime(remainingTime);
  };
  
  private getTime = (time: number): number[] => {
  
    const secsInNum = Math.floor(time % 60);
    const minInNum = Math.floor(time / 60);
    const hoursInNum = Math.floor(minInNum / 60);
    return [hoursInNum, minInNum, secsInNum];
  };
  
  private getFormattedTime = (time: number[]) => {
    let hours = '';
    const minInNum = time[1];
    const hoursInNum = time[0];
    const secsInNum = time[2];
    
    const min = minInNum < 10 ? `0${minInNum}:` : `${minInNum}:`;
    const secs = secsInNum < 10 ? `0${secsInNum}` : `${secsInNum}`;
  
    if (hoursInNum > 0 && hoursInNum < 10) {
      hours = `0${hoursInNum}:`;
    } else if (hoursInNum >= 10) {
      hours = `${hoursInNum}:`;
    }
    
    return `${hours}${min}${secs}`;
  };
  
  public videoSeek = (e) => {
    const bar = this.progressBar.nativeElement;
    console.log(e);
    console.log(this.progressBar);
    const pos = e.offsetX / bar.offsetWidth;
    this.vid.currentTime = pos * this.vid.duration;
    if(this.vid.ended) {
      this.play();
    }
  };
  
  public hasEnded = (e) => {
    this.vid.pause();
    this.isPlaying = false;
  };
  
  public seekAhead = () => {
    let newTime = this.vid.currentTime + (this.vid.duration * 0.1);
    newTime = newTime > this.vid.duration ? this.vid.duration : newTime;
    this.vid.currentTime = newTime;
  };
  
  public seekBack = () => {
    let newTime = this.vid.currentTime - (this.vid.duration * 0.1);
    newTime = newTime < 0 ? 0 : newTime;
    this.vid.currentTime = newTime;
  };
  
  public volumeDown = (e) => {
    let inputTime = this.vid.volume === 1 ? 0.2 : this.vid.volume;
    let vol = ((1 / (1 + Math.pow(Math.E, -inputTime))));
    console.log(vol);
   // this.volume = this.vid.volume;
  };
  
  public volumeUp = (e) => {
    console.log('volup');
    this.vid.volume = this.easeInCubic(this.volume);
    this.volume = this.vid.volume;
  };
  
  private easeInCubic(time: number) {
    return Math.pow(time, 3);
  };
  
  private easeOutCubic(time: number) {
    return (--time) * time * time + 1;
  }

}
