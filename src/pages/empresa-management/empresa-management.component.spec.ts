import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaManagementComponent } from './empresa-management.component';

describe('EmpresaManagementComponent', () => {
  let component: EmpresaManagementComponent;
  let fixture: ComponentFixture<EmpresaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
