import { DateAgoPipe } from './date-ago.pipe';

describe('DateAgoPipe', () => {
  let pipe
  beforeEach(() => {
    const baseTime = new Date(2021, 7, 1);
    jasmine.clock().install()
    jasmine.clock().mockDate(baseTime);
    pipe = new DateAgoPipe();
  })

  afterEach(() => {
    jasmine.clock().uninstall()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms given seconds to time ago format',  () => {
    expect(pipe.transform(1626700776)).toBe('1 week ago')
  })
});
