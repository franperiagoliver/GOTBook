import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactDatesComponent } from './charact-dates.component';

describe('CharactDatesComponent', () => {
  let component: CharactDatesComponent;
  let fixture: ComponentFixture<CharactDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
