import Store from './_Store';

test('get time remaining', () => {
    const store = new Store();
    store.future = 0;
    store.now = 0;
    expect(store.remaining).toBe('1970-001|00:00:00');
});

