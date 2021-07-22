import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Story } from '../../models/story'

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit,OnDestroy {

  stories = []
  destroy$: Subject<boolean> = new Subject<boolean>()
  error: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTopStories()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: number[]) => {
      this.error = ''
      forkJoin(
        data.slice(0,5)
        .map(id => this.dataService.getItem(id))
      ).subscribe((res: Story[]) => {
        this.error = ''
        this.stories = res
      }, (error) =>  {
        this.error = error
      })
    }, (error) =>  {
      this.error = error
    })
  }
  

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
