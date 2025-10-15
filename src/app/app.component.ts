import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { TeaserComponent } from './views/teaser/teaser.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { filter } from 'rxjs';

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
  router = inject(Router)


  constructor(private breakpointObserver: BreakpointObserver) {
    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' }); // 👈 immer nach oben scrollen
    });
  }

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
