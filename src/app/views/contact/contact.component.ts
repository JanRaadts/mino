import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  isContactPage = false;
  router = inject(Router);


  ngOnInit() {
    this.isContactPage = this.router.url === '/kontakt';
  }

  requestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      console.log('Formular abgeschickt:', this.requestForm.value);
      // Hier kannst du z.B. einen HTTP-Request senden oder eine Message anzeigen
    }
  }

  sendMessage() {
    const data = {
      access_key: '3b2e38c5-4fbd-4bf6-9607-754c0775e1b3',
      name: this.requestForm.controls['name'].value,
      email: this.requestForm.controls['email'].value,
      message: this.requestForm.controls['message'].value,
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        alert('Nachricht erfolgreich gesendet!');
        console.log('jetzt clearen'); // Formular leeren
      } else {
        alert('Fehler beim Senden. Bitte später erneut versuchen.');
      }
    })
    .catch(() => alert('Netzwerkfehler'));
  }

}
