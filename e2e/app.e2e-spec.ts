import { AngularStartPage } from './app.po';

describe('angular-start App', () => {
  let page: AngularStartPage;

  beforeEach(() => {
    page = new AngularStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
