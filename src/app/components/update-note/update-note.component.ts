import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title: any;
  description: any;
  id: any;
  
  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private note : NotesService
  ) {
    this.title = this.data.title;
    this.description = this.data.description;
    this.id = this.data.id;
  }

  ngOnInit(): void {
    console.log(this.data)
    
  }
  onClose() {
    let input = {
      title: this.title,
      description: this.description,
      noteId: this.id,
    }
    return this.note.updateNote(input).subscribe((res: any) => { //return is used to update the note value after editing
      console.log(res);
      this.dialogRef.close();
    })
    
  }
  
}
