import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { forkJoin, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Story } from 'src/app/models/story';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss']
})
export class StoryDetailsComponent implements OnInit, OnDestroy {
  public story: Story;
  public comments: Comment[];
  destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(
    public activatedRoute: ActivatedRoute, 
    public router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dataService.getItem(params.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: Story) => {
          this.story = data

          if(this.story.kids?.length) {
            forkJoin(
              (this.story.kids.slice(0, 3))
              .map(id => this.dataService.getItem(id))
            ).subscribe((data: Comment[]) => {
              this.comments = data
            })
          }
        }
      );
    });
  }

  goToStories(): void {
    this.router.navigate(['/stories'])
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
