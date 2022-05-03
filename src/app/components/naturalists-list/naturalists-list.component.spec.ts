import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalistsListComponent } from './naturalists-list.component';

describe('NaturalistsListComponent', () => {
  let component: NaturalistsListComponent;
  let fixture: ComponentFixture<NaturalistsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalistsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
