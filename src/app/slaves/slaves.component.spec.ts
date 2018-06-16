import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlavesComponent } from './slaves.component';

describe('SlavesComponent', () => {
  let component: SlavesComponent;
  let fixture: ComponentFixture<SlavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
