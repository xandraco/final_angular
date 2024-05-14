import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-ui-header',
  standalone: true,
  imports: [
    MatGridListModule
  ],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.css'
})
export class UiHeaderComponent {

}
