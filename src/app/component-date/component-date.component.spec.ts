import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDateComponent } from './component-date.component';

describe('ComponentDateComponent', () => {
  let component: ComponentDateComponent;
  let fixture: ComponentFixture<ComponentDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
