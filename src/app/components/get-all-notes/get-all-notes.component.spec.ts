import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { DisplayComponent } from '../display/display.component';
import { IconsComponent } from '../icons/icons.component';

import { GetAllNotesComponent } from './get-all-notes.component';

describe('GetAllNotesComponent', () => {
  let component: GetAllNotesComponent;
  let fixture: ComponentFixture<GetAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllNotesComponent, CreateNoteComponent, DisplayComponent, IconsComponent ],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatMenuModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
