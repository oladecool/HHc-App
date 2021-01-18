import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooksInfoPage } from './books-info.page';

describe('BooksInfoPage', () => {
  let component: BooksInfoPage;
  let fixture: ComponentFixture<BooksInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
