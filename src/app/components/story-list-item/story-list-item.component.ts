import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-story-list-item',
  templateUrl: './story-list-item.component.html',
  styleUrls: ['./story-list-item.component.scss']
})
export class StoryListItemComponent implements OnInit {
  @Input() story: Story;
  @Input() number?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
