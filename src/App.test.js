/*
 add more meaningful tests as your application grows, such as checking:

User interactions
Component behavior under different states
Form validation
Integration with other components

Run the command npm test 
*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
