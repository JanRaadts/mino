import { Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
