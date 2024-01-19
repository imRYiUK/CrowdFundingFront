import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSideContentComponent } from './crea-side-content.component';

describe('CreaSideContentComponent', () => {
  let component: CreaSideContentComponent;
  let fixture: ComponentFixture<CreaSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaSideContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
