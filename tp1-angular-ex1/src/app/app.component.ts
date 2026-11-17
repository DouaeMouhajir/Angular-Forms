import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface InscriptionModel {
  fullname: string;
  age: number | null;
  country: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: InscriptionModel = {
    fullname: '',
    age: null,
    country: '',
    email: ''
  };

  paysList = [
    { value: 'fr', label: 'France' },
    { value: 'be', label: 'Belgique' },
    { value: 'ch', label: 'Suisse' },
    { value: 'ca', label: 'Canada' },
    { value: 'ma', label: 'Maroc' }
  ];

  submittedData: InscriptionModel | null = null;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.submittedData = { ...this.user };
      console.log('Inscription réussie !', this.submittedData);
    }
  }
}
