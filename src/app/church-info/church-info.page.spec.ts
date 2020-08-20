import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChurchInfoPage } from './church-info.page';

describe('ChurchInfoPage', () => {
  let component: ChurchInfoPage;
  let fixture: ComponentFixture<ChurchInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChurchInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
