import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLayoutComponent } from './navigation-layout.component';

describe('NavigationLayoutComponent', () => {
  let component: NavigationLayoutComponent;
  let fixture: ComponentFixture<NavigationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
