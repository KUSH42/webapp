import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixBackgroundCanvasComponent } from './matrix-background-canvas.component';

describe('MatrixBackgroundCanvasComponent', () => {
  let component: MatrixBackgroundCanvasComponent;
  let fixture: ComponentFixture<MatrixBackgroundCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixBackgroundCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixBackgroundCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
