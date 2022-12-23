import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit{
  @Input() displayMessage: any;

  @Output() autoRefresh = new EventEmitter<any>();

  isTrash = false;
  
  colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

  constructor(private note: NotesService, private route: ActivatedRoute){}

  ngOnInit(): void{
    let option = this.route.component;
     if(option === TrashComponent) {
        this.isTrash = true;
     }
  }

  onArchive() {
    let input = {
      noteIdList: [this.displayMessage.id],
      isArchived: true,
    }
    console.log(input, "archive note")
    this.note.archiveNote(input).subscribe((res: any)=> {
      console.log(res);
      this.autoRefresh.emit(res)
    })
  }
  onDelete() {
    let input = {
      noteIdList: [this.displayMessage.id],
      isDeleted: true,
    }
    console.log(input, "delete note")
    this.note.deleteNote(input).subscribe((res: any)=> {
      console.log(res);
      this.autoRefresh.emit(res)
    })
  }

  onRestrore() {
    let input = {
      noteIdList: [this.displayMessage.id],
      isDeleted: false,
    }
    console.log(input, "delete note")
    this.note.deleteNote(input).subscribe((res: any)=> {
      console.log(res);
      this.autoRefresh.emit(res)
    })
  }

  seletColour(colour: any){
    let data = {
      noteIdList: [this.displayMessage.id],
      color: colour
    }
    this.note.changeColor(data).subscribe((res: any)=> {
      console.log(res);
      this.autoRefresh.emit(res)
    })
  }
}
