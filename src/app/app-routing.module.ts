import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'form/data', component: FormComponent},
  {path: 'job/edit/:id', component: EditJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
