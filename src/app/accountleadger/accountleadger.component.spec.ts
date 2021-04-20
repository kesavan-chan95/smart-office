import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountleadgerComponent } from './accountleadger.component';

describe('AccountleadgerComponent', () => {
  let component: AccountleadgerComponent;
  let fixture: ComponentFixture<AccountleadgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountleadgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountleadgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
