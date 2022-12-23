import { Component, OnInit} from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent {
  arrayNote : any;
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getArchiveList()
  }

  getArchiveList(){
    this.note.getArchiveNotes().subscribe((res: any) => {
      console.log(res)
      this.arrayNote=res.data.data
    })
  }
}
