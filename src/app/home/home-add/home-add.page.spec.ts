import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeAddPage } from './home-add.page';

describe('HomeAddPage', () => {
  let component: HomeAddPage;
  let fixture: ComponentFixture<HomeAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
