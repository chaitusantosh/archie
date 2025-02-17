import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink,RouterOutlet,Router } from '@angular/router';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FaqComponent,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isScrolled=false;
@HostListener('window:scroll',[])
onWindowScroll(){
  this.isScrolled=window.scrollY>100;
}
isHomePage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/' || this.router.url === '/home';
    });
  }
}
