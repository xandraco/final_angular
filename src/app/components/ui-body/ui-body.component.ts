import { Component, OnInit } from '@angular/core';
import { UiLoginComponent } from '../ui-login/ui-login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ObservablesservicesService } from '../../services/observablesservices.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ui-body',
  standalone: true,
  imports: [
    UiLoginComponent,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './ui-body.component.html',
  styleUrl: './ui-body.component.css'
})
export class UiBodyComponent implements OnInit{
  sessionValue: boolean = false;

  constructor(
    private observableService: ObservablesservicesService
  ) {}

  ngOnInit(): void {
    this.observableService.sessionObs.subscribe((value: boolean) => {
      this.sessionValue = value;
    })
  }
}
