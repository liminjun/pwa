import { PwaAppPage } from './app.po';

describe('pwa-app App', () => {
  let page: PwaAppPage;

  beforeEach(() => {
    page = new PwaAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
