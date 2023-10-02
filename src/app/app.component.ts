import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('scrollContent') scrollContent!: ElementRef ;
  // scroll:LocomotiveScroll | undefined
  title = 'lucid-ui';
  constructor(){}
  ngOnInit(): void {
    // this.scroll = new LocomotiveScroll({
    //   el : document.querySelector('#main-container') as HTMLElement,
    //   smooth:true,
    //   getDirection: true
    // });
  }

}
