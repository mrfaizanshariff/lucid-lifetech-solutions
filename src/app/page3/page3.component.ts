import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  constructor() {
    gsap.registerPlugin(ScrollTrigger)

   }

  ngOnInit(): void {
    gsap.from(".crompton-heading",{
    scrollTrigger:{
      trigger:"#page3",
      start:"-10% center",
      // end:()=>"+="+ document.querySelector<HTMLElement>('.crompton-heading')?.offsetHeight,
      end:"20% center",
      toggleActions:"restart pause reverse pause",
      // markers:true,
      // scrub:1,
      // id:"heading"
    },
    y:10,
    color:'blue',
    duration:0.4,
    opacity:0,
    scale:0.5,
    delay:0.4,
    })

  }
  mouseEnter(){
    gsap.to('.cursor',{
      scale:1,
      opacity:1
    })
    
  }
  mouseLeave(){
    
    gsap.to('.cursor',{
      scale:0,
      opacity:0
    })
    
  }
  mouseMove(e:any){
   gsap.to('.cursor',{
    x:e.x-50,
    y:e.layerY-30,
    scrub:1
   });
  }

}
