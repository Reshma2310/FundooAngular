import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  @Input() childMessage: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }
  openDialog(note :any): void {
    this.dialog.open(UpdateNoteComponent, {
      width: '40vw',
      height:'25vh',
      data: note
    });
    console.log(note, "note data")
  }
}
