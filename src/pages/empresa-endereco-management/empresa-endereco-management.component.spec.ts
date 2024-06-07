import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEnderecoManagementComponent } from './empresa-endereco-management.component';

describe('EmpresaEnderecoManagementComponent', () => {
  let component: EmpresaEnderecoManagementComponent;
  let fixture: ComponentFixture<EmpresaEnderecoManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaEnderecoManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresaEnderecoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
