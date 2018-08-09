import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmaddComponent } from './tdmadd.component';

describe('TdmaddComponent', () => {
  let component: TdmaddComponent;
  let fixture: ComponentFixture<TdmaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
