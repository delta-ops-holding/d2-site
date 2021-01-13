import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherpahubComponent } from './sherpahub.component';

describe('SherpahubComponent', () => {
  let component: SherpahubComponent;
  let fixture: ComponentFixture<SherpahubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SherpahubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SherpahubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
