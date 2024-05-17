import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ObservablesservicesService } from '../../services/observablesservices.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ui-header',
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.css'
})
export class UiHeaderComponent implements OnInit{

  sessionValue: boolean = false;

  constructor(
    private observableService: ObservablesservicesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.observableService.sessionObs.subscribe((value: boolean) => {
      this.sessionValue = value;
    })
  }

  changeSessionStatus (): void {
    this.sessionValue = !this.sessionValue
    this.observableService.updateSessionValue(this.sessionValue);
    this.router.navigate(['/'])
  }

}
