import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('Renderiza o app corretamente', () => {
  const { getByText } = render(<App />);
  expect(getByText('Home')).toBeTruthy();
});