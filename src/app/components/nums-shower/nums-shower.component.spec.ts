import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumsShowerComponent } from './nums-shower.component';

describe('NumsShowerComponent', () => {
  let component: NumsShowerComponent;
  let fixture: ComponentFixture<NumsShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumsShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumsShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
