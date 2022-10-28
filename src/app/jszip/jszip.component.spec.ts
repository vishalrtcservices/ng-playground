import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JszipComponent } from './jszip.component';

describe('JszipComponent', () => {
  let component: JszipComponent;
  let fixture: ComponentFixture<JszipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JszipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JszipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
