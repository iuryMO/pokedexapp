import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregoPesquisarComponent } from './emprego-pesquisar.component';

describe('EmpregoPesquisarComponent', () => {
  let component: EmpregoPesquisarComponent;
  let fixture: ComponentFixture<EmpregoPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregoPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregoPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
