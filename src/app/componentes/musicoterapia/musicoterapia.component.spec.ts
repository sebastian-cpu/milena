import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicoterapiaComponent } from './musicoterapia.component';

describe('MusicoterapiaComponent', () => {
  let component: MusicoterapiaComponent;
  let fixture: ComponentFixture<MusicoterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicoterapiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
