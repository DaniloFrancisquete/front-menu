import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatCardModule],

  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',


})
export class CheckoutComponent {
  favoriteSeason: string | undefined;
  seasons: string[] = ['Entrega', 'Retirada'];

}
