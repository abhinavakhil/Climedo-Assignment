import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkCommonDialogComponent } from './artwork-common-dialog.component';

describe('ArtworkCommonDialogComponent', () => {
  let component: ArtworkCommonDialogComponent;
  let fixture: ComponentFixture<ArtworkCommonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkCommonDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
