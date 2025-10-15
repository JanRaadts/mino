import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ButtonComponent,
    ContactComponent,
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
