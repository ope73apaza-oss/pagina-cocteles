import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-card.html',
  styleUrl: './drink-card.css'
})
export class DrinkCardComponent {
  @Input() drink: any;
}