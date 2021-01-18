import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimoniesPage } from './testimonies.page';

describe('TestimoniesPage', () => {
  let component: TestimoniesPage;
  let fixture: ComponentFixture<TestimoniesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimoniesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
