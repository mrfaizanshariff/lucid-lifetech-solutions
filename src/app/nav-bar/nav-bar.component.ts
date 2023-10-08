import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  smallScreen:boolean = false;
  showMenu:boolean=false;
  constructor(private breakpointObserver:BreakpointObserver) {
    breakpointObserver.observe([
      "(max-width: 820px)"
    ]).subscribe({
      next:(result: BreakpointState)=>{
        if (result.matches) {
          this.smallScreen = true
      } else {
        this.smallScreen = false

      }
      }
    })
   }
  ngOnInit(): void {
    
  }


}
