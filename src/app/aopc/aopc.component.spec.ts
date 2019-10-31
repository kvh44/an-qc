import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AopcComponent } from './aopc.component';

describe('AopcComponent', () => {
  let component: AopcComponent;
  let fixture: ComponentFixture<AopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
