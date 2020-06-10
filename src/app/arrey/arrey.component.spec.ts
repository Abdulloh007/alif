import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreyComponent } from './arrey.component';

describe('ArreyComponent', () => {
  let component: ArreyComponent;
  let fixture: ComponentFixture<ArreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
