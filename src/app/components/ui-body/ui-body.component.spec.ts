import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBodyComponent } from './ui-body.component';

describe('UiBodyComponent', () => {
  let component: UiBodyComponent;
  let fixture: ComponentFixture<UiBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
