import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzazioneListaComponent } from './visualizzazione-lista.component';

describe('VisualizzazioneListaComponent', () => {
  let component: VisualizzazioneListaComponent;
  let fixture: ComponentFixture<VisualizzazioneListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizzazioneListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzazioneListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
