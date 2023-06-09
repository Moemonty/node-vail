// eslint-disable-next-line @typescript-eslint/no-var-requires
const handlers = require('../handlers');

test('home page renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.home(req, res);

    expect(res.render.mock.calls[0][0]).toBe('pages/home');
})

test('about page renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.about(req, res);

    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('pages/about');
})

test('404 renders', () => {
    const req = {};
    const res = { render: jest.fn() };
    handlers.notFound(req, res);

    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404');
})

test('500 renders', () => {
    const err = new Error('some error')
    const req = {};
    const res = { render: jest.fn() };
    const next = jest.fn();
    handlers.serverError(err, req, res, next);

    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500');
})
