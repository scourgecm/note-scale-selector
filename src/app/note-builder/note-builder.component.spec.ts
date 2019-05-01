import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBuilderComponent } from './note-builder.component';

describe('NoteBuilderComponent', () => {
  let component: NoteBuilderComponent;
  let fixture: ComponentFixture<NoteBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
