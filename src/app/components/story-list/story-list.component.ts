import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, from, Subject } from 'rxjs';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTopStories()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: number[]) => {
      forkJoin(
        data.slice(0,5)
        .map(id => this.dataService.getItem(id))
      ).subscribe((res: Story[]) => {
        this.stories = res
      })
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
