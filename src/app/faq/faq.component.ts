import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      image: 'carousel1.jpg',
      title: 'What is Angular?',
      description: 'Angular is a popular web application framework developed by Google.'
    },
    {
      image: 'carousel2.jpg',
      title: 'How do I install Angular?',
      description: 'You can install Angular using the Angular CLI: npm install -g @angular/cli.'
    },
    {
      image: 'carousel3.jpg',
      title: 'What is Bootstrap?',
      description: 'Bootstrap is a CSS framework that helps design responsive web applications.'
    },
    {
      image: 'carousel4.jpg',
      title: 'How do I use Bootstrap in Angular?',
      description: 'You can include Bootstrap via a CDN or install it using npm.'
    }
  ];

}
