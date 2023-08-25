import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialRecoveryComponent } from './credential-recovery.component';

describe('CredentialRecoveryComponent', () => {
  let component: CredentialRecoveryComponent;
  let fixture: ComponentFixture<CredentialRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialRecoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
