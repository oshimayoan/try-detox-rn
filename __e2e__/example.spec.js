describe('Example', () => {
  it('should have homepage screen', async () => {
    await expect(element(by.id('homepageTitle'))).toBeVisible();
  });
});
