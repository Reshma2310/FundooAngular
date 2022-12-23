import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { IconsComponent } from '../icons/icons.component';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() childMessage: any;
  @Output() refreshGetallNotes = new EventEmitter<string>();
  message: any;
  filterNote: any;
  constructor(public dialog: MatDialog, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMsg.subscribe((response)=> {
      console.log("searching...", response)
      this.filterNote = response;
    })

  }
  openDialog(note: any): void {
    this.dialog.open(UpdateNoteComponent, {
      width: '40vw',
      height: '25vh',
      data: note
    });
    console.log(note, "note data")
  }

  receivedAutoRefresh($event: any) {
    this.message = $event
    console.log($event);
    this.refreshGetallNotes.emit(this.message);
  }

}
