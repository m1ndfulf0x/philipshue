import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightButtonsComponent } from './light-buttons.component';

describe('LightButtonsComponent', () => {
  let component: LightButtonsComponent;
  let fixture: ComponentFixture<LightButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
