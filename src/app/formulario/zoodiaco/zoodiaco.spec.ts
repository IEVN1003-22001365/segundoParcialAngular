import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zoodiaco } from './zoodiaco';

describe('Zoodiaco', () => {
  let component: Zoodiaco;
  let fixture: ComponentFixture<Zoodiaco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zoodiaco],
    }).compileComponents();

    fixture = TestBed.createComponent(Zoodiaco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
