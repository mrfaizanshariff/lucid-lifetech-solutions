import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  @ViewChild('play') playBtn:ElementRef|any;

  constructor() { 
  }
  
  ngOnInit(): void {
   this.loadingAnimation()
  }
loadingAnimation(){
  const textAnimationProps = {
    y:100,
    duration:0.8,
    opacity:0,
    delay:0.4,
    stagger:0.2
  }
  gsap.from("#page1 h1",textAnimationProps);
  // gsap.from("#page1 h2",textAnimationProps);
  gsap.from("#page1 #vdo-container",{
    scale:0.9,
    duration:1,
    opacity:0,
    delay:1.2,
  });
}
  mouseEnterMethod(){
   gsap.to(this.playBtn.nativeElement,{
    scale:1,
    opacity:1,
   })
  }
  mouseLeaveMethod(){
    gsap.to(this.playBtn.nativeElement,{
      scale:0,
      opacity:0
     })
  }
  mouseMoveMethod(event:any){  
    gsap.to(this.playBtn.nativeElement,{
      left:event.x-70,
      top:event.layerY-10,
   
     })
  }
}
