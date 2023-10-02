import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  mm:any;
  constructor() { 
    gsap.registerPlugin(ScrollTrigger)
    this.mm = gsap.matchMedia();
  }

  ngOnInit(): void {
    this.mm.add("(min-width:601px)",()=>{
      gsap.from(".brand-name",{
        scrollTrigger:{
          trigger:".about-text",
          start:"-40% center",
          end:()=>"+="+ document.querySelector<HTMLElement>('.about-text')?.offsetHeight,
          toggleActions:"restart pause reverse pause",
          // markers:true,
          scrub:1,
          // id:"about-text"
        },
        y:-500,
        // scale:0,
        duration:1,
        opacity:0,
        
      })
    })
    this.mm.add("(max-width:600px)",()=>{
      gsap.from(".brand-name",{
        scrollTrigger:{
          trigger:".about-text",
          start:"-65% 10%",
          end:()=>"+="+ document.querySelector<HTMLElement>('.about-text')?.offsetHeight,
          toggleActions:"restart pause reverse pause",
          // markers:true,
          scrub:1,
          // id:"about-text"
        },
        y:-500,
        // scale:0,
        duration:1,
        opacity:0,
        
      })
    })
  }
  }
  

