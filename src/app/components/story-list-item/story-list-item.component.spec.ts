import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';

import { StoryListItemComponent } from './story-list-item.component';

describe('StoryListItemComponent', () => {
  let component: StoryListItemComponent;
  let fixture: ComponentFixture<StoryListItemComponent>;
  let dateAgoPipe: DateAgoPipe;
  let dateAgoPipeStub: Partial<DateAgoPipe>
  let story = {
    "by" : "hampelm",
    "descendants" : 22,
    "id" : 27893283,
    "kids" : [ 27893635, 27894309, 27894322, 27893520, 27894481, 27894353, 27894329, 27894249, 27894220 ],
    "score" : 103,
    "time" : 1626786776,
    "title" : "Baltimore Museum of Art will host an exhibition curated by the museum's guards",
    "type" : "story",
    "url" : "https://artbma.org/about/press/release/bma-security-officers-take-center-stage-as-guest-curators-of-a-new-exhibition-opening-in-march-2022"
  }
  let number = 1

  dateAgoPipeStub = {
    transform: (p) => p
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryListItemComponent, DateAgoPipe ],
      providers: [{provide: DateAgoPipe, useValue: dateAgoPipeStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListItemComponent);
    dateAgoPipe = TestBed.inject(DateAgoPipe);
    component = fixture.componentInstance;
    component.story = story
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with number', () => {
    component.number = number
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
