import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { TeaserComponent } from '../../views/teaser/teaser.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgIf,
    TeaserComponent,
    ButtonComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isMobile = false;
  isMenuOpen = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isMenuOpen = false; // sicherheitshalber schließen
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}
