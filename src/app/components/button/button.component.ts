import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = "test"
  @Input() color: string = "rgba(0, 0, 0, 1)"
  @Input() disabled: boolean = false;

}
