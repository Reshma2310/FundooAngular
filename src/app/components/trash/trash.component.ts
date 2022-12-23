import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  trashNote: any;
constructor(private note: NotesService){}

ngOnInit(): void {
  this.getDeleteList()
}

getDeleteList(){
  this.note.getDeleteNotes().subscribe((res: any) => {
    console.log(res)
    this.trashNote = res.data.data
  })
}
}
