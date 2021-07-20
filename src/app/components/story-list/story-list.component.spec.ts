import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';
import { StoryListComponent } from './story-list.component';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;
  let dataService: DataService;
  let dataServiceStub: Partial<DataService>;
  let stories = [{
    "by" : "hampelm",
    "descendants" : 22,
    "id" : 27893283,
    "kids" : [ 27893635, 27894309, 27894322, 27893520, 27894481, 27894353, 27894329, 27894249, 27894220 ],
    "score" : 103,
    "time" : 1626786776,
    "title" : "Baltimore Museum of Art will host an exhibition curated by the museum's guards",
    "type" : "story",
    "url" : "https://artbma.org/about/press/release/bma-security-officers-take-center-stage-as-guest-curators-of-a-new-exhibition-opening-in-march-2022"
  }]


  beforeEach(async(() => {
    dataServiceStub = {
      getItem: () => of(stories[0]),
      getTopStories: () => of(stories)
    }
    TestBed.configureTestingModule({
      declarations: [ StoryListComponent ],
      providers: [{ provide: DataService, useValue: dataServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
