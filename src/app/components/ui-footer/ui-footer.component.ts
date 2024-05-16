import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-ui-footer',
  standalone: true,
  imports: [
    MatGridListModule
  ],
  templateUrl: './ui-footer.component.html',
  styleUrl: './ui-footer.component.css'
})
export class UiFooterComponent {

}
