import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Story } from '../models/story';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DataService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected top stories (HttpClient called once)', (done: DoneFn) => {
    const expectedStories: Story[] = [{
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
  
    httpClientSpy.get.and.returnValue(of(expectedStories));
  
    service.getTopStories().subscribe(
      stories => {
        expect(stories).toEqual(expectedStories, 'expected stories');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
