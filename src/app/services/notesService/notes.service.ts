import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
 token: any
  constructor(private http: HttpService) {
    this.token=localStorage.getItem('token')
   }

  addNotes(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', data, true, header)
  }

  getNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', true, header)
  }

  updateNote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',data,true, header)
  }

  archiveNote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', data, true, header)
  }

  deleteNote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', data, true, header)
  }

  changeColor(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', data, true, header)
  }

  getArchiveNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList', true, header)
  }

  getDeleteNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList', true, header)
  }
}
