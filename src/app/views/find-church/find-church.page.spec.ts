import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindChurchPage } from './find-church.page';

describe('FindChurchPage', () => {
  let component: FindChurchPage;
  let fixture: ComponentFixture<FindChurchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindChurchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindChurchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
