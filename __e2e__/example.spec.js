describe('Example', () => {
  it('should have homepage screen', async () => {
    await expect(element(by.id('homepageTitle'))).toBeVisible();
  });
  it('should have button', async () => {
    await element(by.id('juangFuck')).tap();
    await expect(element(by.id('showJuang'))).toBeVisible();
  });
});
