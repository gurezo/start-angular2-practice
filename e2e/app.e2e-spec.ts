import { StartAngular2PracticePage } from './app.po';

describe('start-angular2-practice App', function() {
  let page: StartAngular2PracticePage;

  beforeEach(() => {
    page = new StartAngular2PracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app sample!');
  });
});
