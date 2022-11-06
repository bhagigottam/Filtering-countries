import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagyaComponent } from './bhagya.component';

describe('BhagyaComponent', () => {
  let component: BhagyaComponent;
  let fixture: ComponentFixture<BhagyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhagyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhagyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
