import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TP4-Interface');
  //Información general de formularios: https://angular.dev/guide/forms/reactive-forms
  //https://angular.dev/api/forms/FormGroup
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  //https://angular.dev/api/forms/FormBuilder
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [
        '',
        [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10)],
      ],
      topic: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /**
   * Sube el formulario a MockAPI:
   * https://6a31b5207bc5e1c612661991.mockapi.io/api/forms
   */
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    const formData = this.contactForm.value;

    fetch('https://6a31b5207bc5e1c612661991.mockapi.io/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        createdAt: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        telephone: formData.telephone,
        topic: formData.topic,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset({
          name: '',
          email: '',
          telephone: '',
          topic: '',
          message: '',
        });

        setTimeout(() => {
          this.submitSuccess.set(false);
        }, 5000);
      })
      .catch((error) => {
        this.isSubmitting.set(false);
        this.submitError.set(true);
        console.error('Error submitting form:', error);
      });
  }

  closeToast() {
    this.submitSuccess.set(false);
  }

  closeErrorToast() {
    this.submitError.set(false);
  }
}
