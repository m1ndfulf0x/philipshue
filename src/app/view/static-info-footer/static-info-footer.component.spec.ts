import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticInfoFooterComponent } from './static-info-footer.component';

describe('StaticInfoFooterComponent', () => {
  let component: StaticInfoFooterComponent;
  let fixture: ComponentFixture<StaticInfoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticInfoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticInfoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
