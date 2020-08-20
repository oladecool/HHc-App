import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FatherProfilePage } from './father-profile.page';

describe('FatherProfilePage', () => {
  let component: FatherProfilePage;
  let fixture: ComponentFixture<FatherProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FatherProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
