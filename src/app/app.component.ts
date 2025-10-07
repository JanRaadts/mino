import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { TeaserComponent } from './views/teaser/teaser.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeaserComponent, MenuComponent, ButtonComponent, NgIf, LandingPageComponent, ContactComponent, FooterComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  isMobile = true;
  isMenuOpen = false;

//  ngOnInit() {
//    this.checkScreenSize();
//  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
    .observe([Breakpoints.Handset]) // du kannst auch eigene Abfragen machen
    .subscribe(result => {
      console.log(result);
      this.isMobile = result.matches;
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
      console.log(this.isMobile);
    });
  }

//  @HostListener('window:resize')
//  onResize() {
//    this.checkScreenSize();
//  }
//
//  checkScreenSize() {
//    this.isMobile = window.innerWidth <= 768;
//    if (!this.isMobile) {
//      this.isMenuOpen = false; // sicherheitshalber schließen
//    }
//  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
