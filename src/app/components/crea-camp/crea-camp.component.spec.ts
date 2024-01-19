import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaCampComponent } from './crea-camp.component';

describe('CreaCampComponent', () => {
  let component: CreaCampComponent;
  let fixture: ComponentFixture<CreaCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
