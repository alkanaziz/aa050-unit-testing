import { render, screen, waitFor, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('The header should contain the text "User List"', () => {
  render(<App />);
  const heading = screen.getByText('User List');
  expect(heading).toBeInTheDocument();
})

test('The h1 should be "User List"', () => {
  render(<App />)
  const h1Elem = document.querySelector('h1');
  expect(h1Elem.textContent).toBe('User List');
});

test('Fetch and renders users', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(5);
  })
});

test('Data length should be 10', async () => {
  render(<App />);
  await waitFor(() => {
    // const listItem = screen.getAllByRole('listitem');
    // expect(listItem.length).toEqual(10);
    const userListElem = document.querySelector('.userlist');
    expect(userListElem.childNodes.length).toBe(10);
  })
});

test('The first user should be "Leanne Graham"', async () => {
  render(<App />);
  await waitFor(() => {
    // const firstUserItem = screen.getAllByRole('listitem')[0];
    const firstUserItem = document.querySelector('li')
    expect(firstUserItem.textContent).toBe('Leanne Graham');
  })
});


test('There should be a list in the component', async () => {
  render(<App />);
  await waitFor(() => {
    const listElements = screen.getByRole('list');
    expect(listElements).toBeInTheDocument();
    expect(listElements.tagName).toBe('OL');
    expect(listElements.className).toBe('userlist');
    expect(listElements.childNodes.length).toBeGreaterThan(0);
    expect(listElements.childNodes[0].tagName).toBe('LI');
    expect(listElements.childNodes[0].textContent).toBe('Leanne Graham');
    expect(listElements.childNodes[1].textContent).toBe('Ervin Howell');
  })
});