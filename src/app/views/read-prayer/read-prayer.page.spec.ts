import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadPrayerPage } from './read-prayer.page';

describe('ReadPrayerPage', () => {
  let component: ReadPrayerPage;
  let fixture: ComponentFixture<ReadPrayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadPrayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadPrayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
