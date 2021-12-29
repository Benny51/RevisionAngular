import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributsDirectiveComponent } from './attributs-directive.component';

describe('AttributsDirectiveComponent', () => {
  let component: AttributsDirectiveComponent;
  let fixture: ComponentFixture<AttributsDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributsDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
