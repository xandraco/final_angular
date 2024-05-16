import { Component } from '@angular/core';
import { UiLoginComponent } from '../ui-login/ui-login.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-ui-body',
  standalone: true,
  imports: [
    UiLoginComponent,
    MatGridListModule
  ],
  templateUrl: './ui-body.component.html',
  styleUrl: './ui-body.component.css'
})
export class UiBodyComponent {

}
