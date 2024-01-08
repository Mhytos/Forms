import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="myForm" (ngSubmit)="handleSubmit()">
    <input formControlName="firstName" type="text" />
    <input formControlName="lastName" type="text" />
    <button type="submit">Submit</button>
</form>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.minLength(20), Validators.required]],
  });

  handleSubmit() {
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
  }
}
