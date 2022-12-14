import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private note: NotesService) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      Title: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    })

  }

  onSubmit() {
    // this.submitted = true;
    if(this.createForm.valid){
      console.log("valid data", this.createForm.value);
      console.log("do api call");
      let data = {
        title: this.createForm.value.Title,
        description: this.createForm.value.Description
      }
      this.note.addNotes(data).subscribe((res: any)=> {
        console.log(res)
      })

    }
    else {
      console.log("invalid data", this.createForm.value);
      console.log("no api call");
    }
  }
}
