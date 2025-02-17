import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor(){}
ngOnInit(): void {
    this.addParallaxEffect();
}
@HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrolled = window.scrollY;
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    if (heroSection) {
      heroSection.style.backgroundPositionY = `${-scrolled * 0.7}px`;
    }
  }

  addParallaxEffect(): void {
    // Initial background position for smooth effect
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    if (heroSection) {
      heroSection.style.backgroundAttachment = 'fixed'; // Alternative method
    }
  }

}
