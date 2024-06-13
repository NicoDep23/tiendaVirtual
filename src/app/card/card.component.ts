import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() description: string | undefined;
  @Input() price: string | number | undefined;
  @Input() producto: any;
  @Input() list: string | number | undefined;
}
