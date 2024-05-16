import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPokemonTableComponent } from './ui-pokemon-table.component';

describe('UiPokemonTableComponent', () => {
  let component: UiPokemonTableComponent;
  let fixture: ComponentFixture<UiPokemonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPokemonTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiPokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
