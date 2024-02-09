import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { JobTableComponent } from './pages/job-table/job-table.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'form/data', component: FormComponent},
  {path: 'job/edit/:id', component: EditJobComponent},
  {path: 'job/table/:id', component: JobTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
