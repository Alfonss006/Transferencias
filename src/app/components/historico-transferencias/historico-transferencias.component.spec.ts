import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoTransferenciasComponent } from './historico-transferencias.component';

describe('HistoricoTransferenciasComponent', () => {
  let component: HistoricoTransferenciasComponent;
  let fixture: ComponentFixture<HistoricoTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoTransferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
