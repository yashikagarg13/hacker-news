import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoryListItemComponent } from './components/story-list-item/story-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    StoryDetailsComponent,
    DateAgoPipe,
    PageNotFoundComponent,
    StoryListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * design
  * icons 
  * colors
  * font
  * responsive
 * unit test
 */