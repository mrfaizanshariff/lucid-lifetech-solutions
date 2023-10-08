import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  matchMedia:any;
  constructor() {
    gsap.registerPlugin(ScrollTrigger)
    this.matchMedia=gsap.matchMedia();
   }
 
  ngOnInit(): void {
    this.matchMedia.add("(min-width:601px)",()=>{
      gsap.to('.elem h2',{
        scrollTrigger:{
          trigger:".elem",
          start:"10% center",
          end:()=>"+="+ document.querySelector<HTMLElement>('.elem')?.offsetHeight,
          toggleActions:"restart pause reverse pause",
          // markers:true,
          // scrub:1,
          // id:"image"
      },
        y:20,
        // duration:2,
        color:"#ffffff",
        scrub:1,
        // stagger:1
      })    
      gsap.to('.action-button',{
        scrollTrigger:{
          trigger:".elem",
          start:"10% center",
          end:()=>"+="+ document.querySelector<HTMLElement>('.elem')?.offsetHeight,
          toggleActions:"restart pause reverse pause",
          // markers:true,
          scrub:1,
          // id:"action"
        },
        y:30,
        scale:1.05,
        duration:0.5,
        backgroundColor:'#ebe397'
        // stagger:0.4
      })
      gsap.to('#page2',{
        scrollTrigger:{
          trigger:"#page2",
          start:"30% center",
          end:"70% center",
          toggleActions:"restart pause reverse pause",
          // markers:true,
          scrub:1,
          // id:"page3"
        },
        backgroundColor:"#004c86",
      })

    })    
    this.matchMedia.add("(max-width:600px)",()=>{
      gsap.to('.elem h2',{
        scrollTrigger:{
          trigger:".elem",
          start:"10% center",
          end:()=>"+="+ document.querySelector<HTMLElement>('.elem')?.offsetHeight,
          toggleActions:"restart pause reverse pause",
          // markers:true,
          scrub:1,
      },
        y:20,
        // duration:2,
        color:"#ffffff",
        scrub:1,
        // stagger:1
      }) 
      gsap.to('#page2',{
        scrollTrigger:{
          trigger:"#page2",
          start:"30% center",
          end:"70% center",
          toggleActions:"restart pause reverse pause",
          // markers:true,
          scrub:1,
        },
        backgroundColor:"#004c86",
      })
    })
  }

}
