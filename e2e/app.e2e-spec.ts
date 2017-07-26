import { TlingPage } from './app.po';

describe('tling App', () => {
  let page: TlingPage;

  beforeEach(() => {
    page = new TlingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
