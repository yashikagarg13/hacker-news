import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'stories', pathMatch: 'full'},
  { path: 'stories', component: StoryListComponent },
  { path: 'detail/:id', component: StoryDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
