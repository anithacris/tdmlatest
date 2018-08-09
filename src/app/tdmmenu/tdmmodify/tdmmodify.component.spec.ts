import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmmodifyComponent } from './tdmmodify.component';

describe('TdmmodifyComponent', () => {
  let component: TdmmodifyComponent;
  let fixture: ComponentFixture<TdmmodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmmodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
