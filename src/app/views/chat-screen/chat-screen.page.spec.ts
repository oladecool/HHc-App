import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatScreenPage } from './chat-screen.page';

describe('ChatScreenPage', () => {
  let component: ChatScreenPage;
  let fixture: ComponentFixture<ChatScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
