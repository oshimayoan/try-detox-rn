describe('Todo App', () => {
  it('should have header view', async () => {
    await expect(element(by.id('headerView'))).toBeVisible();
  });

  it('should have todos view', async () => {
    await expect(element(by.id('todosView'))).toExist();
  });

  it('should have app title', async () => {
    await expect(element(by.id('appTitle'))).toBeVisible();
  });

  it('should have a text input', async () => {
    await expect(element(by.id('mainInput'))).toBeVisible();
  });

  it('should have a submit button', async () => {
    await expect(element(by.id('submitButton'))).toBeVisible();
  });

  it('should have submit a new todo', async () => {
    await element(by.id('mainInput')).typeText('Buy a food');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton0'))).toBeVisible();
    await expect(element(by.id('todo0'))).toHaveText('Buy a food');
  });

  it('should have remove a todo', async () => {
    await element(by.id('mainInput')).typeText('Buy a food');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton0'))).toBeVisible();
    await expect(element(by.id('todo0'))).toHaveText('Buy a food');

    await element(by.id('deleteButton0')).tap();
    await expect(element(by.id('todo0'))).toNotExist();
  });

  it('should have submit three new todos', async () => {
    await element(by.id('mainInput')).typeText('Buy a food');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton0'))).toBeVisible();
    await expect(element(by.id('todo0'))).toHaveText('Buy a food');

    await element(by.id('mainInput')).typeText('Buy a medicine');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton1'))).toBeVisible();
    await expect(element(by.id('todo1'))).toHaveText('Buy a medicine');

    await element(by.id('mainInput')).typeText('Buy a drink');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton2'))).toBeVisible();
    await expect(element(by.id('todo2'))).toHaveText('Buy a drink');
  });

  it('should have remove the second todo', async () => {
    await element(by.id('mainInput')).typeText('Buy a food');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton0'))).toBeVisible();
    await expect(element(by.id('todo0'))).toHaveText('Buy a food');

    await element(by.id('mainInput')).typeText('Buy a medicine');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton1'))).toBeVisible();
    await expect(element(by.id('todo1'))).toHaveText('Buy a medicine');

    await element(by.id('mainInput')).typeText('Buy a drink');
    await element(by.id('submitButton')).tap();
    await expect(element(by.id('deleteButton2'))).toBeVisible();
    await expect(element(by.id('todo2'))).toHaveText('Buy a drink');

    await element(by.id('deleteButton1')).tap();
    await expect(element(by.text('Buy a medicine'))).toNotExist();
  });
});
