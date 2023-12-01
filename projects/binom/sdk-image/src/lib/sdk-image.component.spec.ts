import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkImageComponent } from './sdk-image.component';

describe('SdkImageComponent', () => {
  let component: SdkImageComponent;
  let fixture: ComponentFixture<SdkImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
