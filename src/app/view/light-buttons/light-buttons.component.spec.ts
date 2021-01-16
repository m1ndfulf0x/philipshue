import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightButtonsComponent } from './light-buttons.component';

describe('LightButtonsComponent', () => {
  let component: LightButtonsComponent;
  let fixture: ComponentFixture<LightButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LightButtonsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
