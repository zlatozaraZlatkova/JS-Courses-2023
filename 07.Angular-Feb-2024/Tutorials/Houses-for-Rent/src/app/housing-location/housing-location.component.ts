import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})


export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
