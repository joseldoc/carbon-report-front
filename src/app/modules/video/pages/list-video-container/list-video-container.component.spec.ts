import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideoContainerComponent } from './list-video-container.component';

describe('ListVideoContainerComponent', () => {
  let component: ListVideoContainerComponent;
  let fixture: ComponentFixture<ListVideoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVideoContainerComponent]
    });
    fixture = TestBed.createComponent(ListVideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
