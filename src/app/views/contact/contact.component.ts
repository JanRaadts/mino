import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
export class ContactComponent {

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

}
