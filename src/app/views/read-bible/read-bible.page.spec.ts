import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadBiblePage } from './read-bible.page';

describe('ReadBiblePage', () => {
  let component: ReadBiblePage;
  let fixture: ComponentFixture<ReadBiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadBiblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadBiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
