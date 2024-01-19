import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaNavComponent } from './crea-nav.component';

describe('CreaNavComponent', () => {
  let component: CreaNavComponent;
  let fixture: ComponentFixture<CreaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
