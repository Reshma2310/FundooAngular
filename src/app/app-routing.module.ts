import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotemail', component: ForgotEmailComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'notes', component: GetAllNotesComponent },
      { path: 'archive', component: ArchieveComponent },
      { path: 'trash', component: TrashComponent }
    ]
  },
  {path:'display', component:DisplayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
