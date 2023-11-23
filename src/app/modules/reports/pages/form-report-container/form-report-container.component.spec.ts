import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReportContainerComponent } from './form-report-container.component';

describe('FormReportContainerComponent', () => {
  let component: FormReportContainerComponent;
  let fixture: ComponentFixture<FormReportContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReportContainerComponent]
    });
    fixture = TestBed.createComponent(FormReportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
