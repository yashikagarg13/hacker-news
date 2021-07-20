import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'stories', pathMatch: 'full'},
  { path: 'stories', component: StoryListComponent },
  { path: 'details', component: StoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
