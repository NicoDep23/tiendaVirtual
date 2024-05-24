import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() description: string | undefined;
  @Input() price: string | undefined;
}
