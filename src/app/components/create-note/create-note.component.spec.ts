import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateNoteComponent } from './create-note.component';
import { IconsComponent } from '../icons/icons.component';
import { DisplayComponent } from '../display/display.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoteComponent, IconsComponent, DisplayComponent ],imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
