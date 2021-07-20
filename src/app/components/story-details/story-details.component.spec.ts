import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

import { StoryDetailsComponent } from './story-details.component';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

describe('StoryDetailsComponent', () => {
  let component: StoryDetailsComponent;
  let fixture: ComponentFixture<StoryDetailsComponent>;
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
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(async(() => {
    dataServiceStub = {
      getItem: () => of(stories[0]),
      getTopStories: () => of(stories)
    }
    activatedRouteStub = new ActivatedRouteStub()
  
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ StoryDetailsComponent ],
      providers: [
        { provide:  ActivatedRoute, useValue: activatedRouteStub },
        { provide:  Router, useValue: routerSpy },
      ]
    })
    .compileComponents();
  }));

  beforeEach(async () => {
    activatedRouteStub.setParamMap({id: stories[0].id});
    fixture = await TestBed.createComponent(StoryDetailsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
