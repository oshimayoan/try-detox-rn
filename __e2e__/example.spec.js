import {reloadApp} from 'detox-expo-helpers';

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have homepage screen', async () => {
    await expect(element(by.id('homepageTitle'))).toBeVisible();
  });
});
