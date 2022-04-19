import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDetalhadoComponent } from './colaborador-detalhado.component';

describe('ColaboradorDetalhadoComponent', () => {
  let component: ColaboradorDetalhadoComponent;
  let fixture: ComponentFixture<ColaboradorDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboradorDetalhadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
