import { LinioFrontendPage } from './app.po';

describe('linio-frontend App', () => {
  let page: LinioFrontendPage;

  beforeEach(() => {
    page = new LinioFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
