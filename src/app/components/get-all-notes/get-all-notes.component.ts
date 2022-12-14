import { Component, OnInit} from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent {

  arrayList: any;
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getNoteList()
  }

  getNoteList(){
    this.note.getNotes().subscribe((res:any)=>{
      console.log(res);
      this.arrayList = res.data.data
      console.log(this.arrayList);
    })
  }
}
