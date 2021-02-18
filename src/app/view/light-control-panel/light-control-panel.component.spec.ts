import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightControlPanelComponent } from './light-control-panel.component';

describe('LightControlPanelComponent', () => {
    let component: LightControlPanelComponent;
    let fixture: ComponentFixture<LightControlPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LightControlPanelComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LightControlPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
